import {
  createDecipheriv,
  createHash,
  createHmac,
  randomBytes,
  scryptSync,
  timingSafeEqual,
} from 'crypto';
import { EstadoUsuario, RolUsuario } from '../alumno/entities/alumno.entity';

const TOKEN_TTL_MS = 1000 * 60 * 60 * 12;
const DEV_AUTH_SECRET = 'dev-auth-secret-change-me';
const DEV_TRANSPORT_SECRET = 'local-dev-transport-secret-2025';

export type SessionUser = {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  grupo: string;
  rol: RolUsuario;
  estado: EstadoUsuario;
};

type TokenPayload = SessionUser & {
  exp: number;
};

function getAuthSecret() {
  const secret = process.env.AUTH_SECRET?.trim();

  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
    throw new Error('AUTH_SECRET no esta configurada para el entorno productivo.');
  }

  return DEV_AUTH_SECRET;
}

function getTransportSecret() {
  const secret = process.env.AUTH_TRANSPORT_SECRET?.trim();

  if (secret) {
    return secret;
  }

  if (process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
    throw new Error('AUTH_TRANSPORT_SECRET no esta configurada para el entorno productivo.');
  }

  return DEV_TRANSPORT_SECRET;
}

function toBase64Url(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url');
}

function fromBase64Url(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function signValue(value: string) {
  return createHmac('sha256', getAuthSecret()).update(value).digest('base64url');
}

function buildTransportKey() {
  return createHash('sha256').update(getTransportSecret()).digest();
}

export function decodeIncomingPassword(value: string) {
  if (typeof value !== 'string' || !value.startsWith('enc::')) {
    return value;
  }

  const [, ivBase64, cipherBase64] = value.split('::');

  if (!ivBase64 || !cipherBase64) {
    throw new Error('Formato de contraseña cifrada inválido');
  }

  const iv = Buffer.from(ivBase64, 'base64');
  const payload = Buffer.from(cipherBase64, 'base64');

  if (payload.length < 17) {
    throw new Error('Contenido cifrado incompleto');
  }

  const authTag = payload.subarray(payload.length - 16);
  const encrypted = payload.subarray(0, payload.length - 16);
  const decipher = createDecipheriv('aes-256-gcm', buildTransportKey(), iv);
  decipher.setAuthTag(authTag);

  const decrypted = Buffer.concat([decipher.update(encrypted), decipher.final()]);
  return decrypted.toString('utf8');
}

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

export function isPasswordHashed(password: string) {
  return typeof password === 'string' && password.includes(':');
}

export function verifyPassword(password: string, storedPassword: string) {
  if (!isPasswordHashed(storedPassword)) {
    return password === storedPassword;
  }

  const [salt, expectedHash] = storedPassword.split(':');
  const computedHash = scryptSync(password, salt, 64);
  const expectedBuffer = Buffer.from(expectedHash, 'hex');

  return expectedBuffer.length === computedHash.length && timingSafeEqual(expectedBuffer, computedHash);
}

export function createAuthToken(user: SessionUser) {
  const payload: TokenPayload = {
    ...user,
    exp: Date.now() + TOKEN_TTL_MS,
  };

  const encodedPayload = toBase64Url(JSON.stringify(payload));
  const signature = signValue(encodedPayload);
  return `${encodedPayload}.${signature}`;
}

export function verifyAuthToken(token: string) {
  const [encodedPayload, providedSignature] = token.split('.');

  if (!encodedPayload || !providedSignature) {
    throw new Error('Token invalido');
  }

  const expectedSignature = signValue(encodedPayload);

  if (expectedSignature !== providedSignature) {
    throw new Error('Firma invalida');
  }

  const payload = JSON.parse(fromBase64Url(encodedPayload)) as TokenPayload;

  if (!payload.exp || payload.exp < Date.now()) {
    throw new Error('Token expirado');
  }

  return payload;
}

export function sanitizeBearerToken(authorizationHeader?: string) {
  if (!authorizationHeader) {
    return null;
  }

  const trimmed = authorizationHeader.trim();
  if (!trimmed.toLowerCase().startsWith('bearer ')) {
    return null;
  }

  return trimmed.slice(7).trim();
}
