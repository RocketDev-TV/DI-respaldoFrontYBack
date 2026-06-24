export const MAX_DELIVERY_FILE_SIZE_BYTES = 10 * 1024 * 1024;

export const ALLOWED_DELIVERY_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.ms-excel',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'application/zip',
  'text/plain',
  'image/jpeg',
  'image/png',
]);

export function validateDeliveryFile(file) {
  if (!file) {
    return 'Selecciona un archivo.';
  }

  if (file.size > MAX_DELIVERY_FILE_SIZE_BYTES) {
    return 'El archivo es demasiado grande (máximo 10 MB para entrega en plataforma).';
  }

  if (!ALLOWED_DELIVERY_MIME_TYPES.has(file.type)) {
    return 'Tipo de archivo no permitido. Tipos válidos: PDF, Word, Excel, ZIP, TXT, JPG, PNG.';
  }

  return null;
}
