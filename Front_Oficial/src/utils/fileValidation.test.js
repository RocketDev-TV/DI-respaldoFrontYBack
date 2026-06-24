import {
  MAX_DELIVERY_FILE_SIZE_BYTES,
  validateDeliveryFile,
} from './fileValidation';

describe('validateDeliveryFile', () => {
  it('acepta un PDF de hasta 10 MB', () => {
    expect(
      validateDeliveryFile({
        size: MAX_DELIVERY_FILE_SIZE_BYTES,
        type: 'application/pdf',
      }),
    ).toBeNull();
  });

  it('rechaza archivos mayores a 10 MB', () => {
    expect(
      validateDeliveryFile({
        size: MAX_DELIVERY_FILE_SIZE_BYTES + 1,
        type: 'application/pdf',
      }),
    ).toMatch(/máximo 10 MB/i);
  });

  it('rechaza tipos no permitidos', () => {
    expect(
      validateDeliveryFile({
        size: 100,
        type: 'application/x-msdownload',
      }),
    ).toMatch(/tipo de archivo no permitido/i);
  });
});
