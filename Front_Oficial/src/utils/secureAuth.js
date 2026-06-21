const FALLBACK_TRANSPORT_SECRET = 'local-dev-transport-secret-2025';

function getTransportSecret() {
  return process.env.REACT_APP_AUTH_TRANSPORT_SECRET?.trim() || FALLBACK_TRANSPORT_SECRET;
}

function bytesToBase64(bytes) {
  let binary = '';
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

async function buildAesKey() {
  const encoder = new TextEncoder();
  const rawSecret = encoder.encode(getTransportSecret());
  const digest = await window.crypto.subtle.digest('SHA-256', rawSecret);
  return window.crypto.subtle.importKey(
    'raw',
    digest,
    { name: 'AES-GCM' },
    false,
    ['encrypt'],
  );
}

export async function encryptPassword(password) {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  const key = await buildAesKey();
  const encryptedBuffer = await window.crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    encoder.encode(password),
  );

  return `enc::${bytesToBase64(iv)}::${bytesToBase64(new Uint8Array(encryptedBuffer))}`;
}
