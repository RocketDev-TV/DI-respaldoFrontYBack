const { test, expect } = require('@playwright/test');

const accounts = {
  admin: {
    email: 'admin@ipn.mx',
    password: 'Admin123!',
    panel: 'Panel de control institucional',
  },
  moderator: {
    email: 'moderador1@ipn.mx',
    password: 'Moderador123!',
    panel: 'Panel de moderación académica',
  },
  student: {
    email: 'prueba1@gmail.com',
    password: '123456',
    panel: 'Panel del alumno',
  },
};

function monitorPage(page) {
  const errors = [];

  page.on('pageerror', (error) => {
    errors.push(`pageerror: ${error.message}`);
  });

  page.on('console', (message) => {
    if (message.type() === 'error') {
      const text = message.text();
      if (
        !text.includes('Failed to load resource') &&
        !text.includes('Permissions policy violation: compute-pressure')
      ) {
        errors.push(`console: ${text}`);
      }
    }
  });

  return errors;
}

async function login(page, account) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Iniciar Sesión' }).click();
  await page.getByLabel('Correo Electrónico', { exact: true }).fill(account.email);
  await page.getByLabel('Contraseña', { exact: true }).fill(account.password);
  await page.locator('#contentArea').getByRole('button', { name: 'Iniciar Sesión', exact: true }).click();
  await expect(
    page.locator('#contentArea').getByRole('heading', { name: account.panel, exact: true }),
  ).toBeVisible();
}

test('visitante navega por páginas públicas y no puede abrir descargas', async ({ page }) => {
  const errors = monitorPage(page);

  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Bienvenida al Portal de Aprendizaje' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Descargas' })).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Presentaciones' })).toHaveCount(0);

  await page.getByRole('button', { name: 'Compiladores' }).click();
  await expect(
    page.locator('#contentArea').getByRole('heading', { name: 'Iniciar Sesión' }),
  ).toBeVisible();

  await page.getByRole('button', { name: 'Contacto' }).click();
  await expect(page.getByRole('heading', { name: 'Contacto', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
});

test('administrador inicia sesión, abre descargas y consulta la guía DIDACMAX', async ({ page }) => {
  const errors = monitorPage(page);
  await login(page, accounts.admin);

  await expect(page.getByText('Alumnos Totales')).toBeVisible();
  await page.getByRole('button', { name: 'Descargas' }).click();
  await expect(page.getByRole('heading', { name: 'Materiales para descargar' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Presentaciones' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Descargar' }).first()).toHaveAttribute(
    'href',
    /archivostcyc\.zip$/,
  );

  await page.getByRole('button', { name: 'Abrir guía' }).click();
  await expect(page.getByRole('heading', { name: 'Ejecutar DIDACMAX 2000 con DOSBox' })).toBeVisible();
  await expect(page.getByRole('navigation', { name: 'Índice de la guía' })).toBeVisible();
  await expect(page.getByRole('link', { name: /Descargar instructivo original/ })).toHaveAttribute(
    'href',
    /Instructivo-DIDACMAX-2000-C2P\.docx$/,
  );

  const resources = await page.evaluate(async () => {
    const urls = [
      '/descargas/guias/didacmax/Instructivo-DIDACMAX-2000-C2P.docx',
      '/descargas/paquetes/archivostcyc.zip',
      '/descargas/paquetes/DDMC.zip',
      '/descargas/guias/didacmax/imagenes/paso-11.png',
    ];
    return Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        return { url, status: response.status, size: Number(response.headers.get('content-length') || 0) };
      }),
    );
  });

  expect(resources.every((resource) => resource.status === 200)).toBe(true);
  expect(resources.every((resource) => resource.size > 0)).toBe(true);
  expect(errors).toEqual([]);
});

test('administrador abre presentaciones y ve recursos reales', async ({ page }) => {
  const errors = monitorPage(page);
  await login(page, accounts.admin);

  await page.getByRole('button', { name: 'Presentaciones' }).click();
  await expect(page.locator('#contentArea').getByRole('heading', { name: 'Presentaciones' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'BNF_MT.pptx' })).toBeVisible();
  await expect(page.getByText('Esta presentación se descarga para abrirse en PowerPoint')).toBeVisible();

  await page.getByRole('button', { name: 'Uso de Gramaticas.pdf' }).click();
  await expect(page.getByRole('heading', { name: 'Uso de Gramaticas.pdf' })).toBeVisible();
  await expect(page.locator('iframe[title="Vista previa de Uso de Gramaticas.pdf"]')).toBeVisible();

  const resources = await page.evaluate(async () => {
    const urls = [
      '/descargas/presentaciones/bnf-mt.pptx',
      '/descargas/presentaciones/uso-gramaticas.pdf',
    ];
    return Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url);
        return { url, status: response.status, size: Number(response.headers.get('content-length') || 0) };
      }),
    );
  });

  expect(resources.every((resource) => resource.status === 200)).toBe(true);
  expect(resources.every((resource) => resource.size > 0)).toBe(true);
  expect(errors).toEqual([]);
});

test('alumno inicia sesión, cambia de parcial y abre un curso', async ({ page }) => {
  const errors = monitorPage(page);
  await login(page, accounts.student);

  await expect(page.getByText(/Grupo TC-/)).toBeVisible();
  await page.getByRole('button', { name: 'Parcial 2' }).click();
  await expect(page.getByRole('button', { name: 'Parcial 2' })).toBeVisible();

  await page.getByRole('button', { name: 'Teoría de la Computación.' }).click();
  await expect(page.getByRole('heading', { name: 'Teoría de la Computación.' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Guión Didáctico' })).toBeVisible();
  expect(errors).toEqual([]);
});

test('moderador inicia sesión y carga la gestión de contenidos', async ({ page }) => {
  const errors = monitorPage(page);
  await login(page, accounts.moderator);

  await expect(page.getByRole('heading', { name: 'Moderación de contenidos' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Recargar' })).toBeVisible();
  await expect(page.getByText(/Unidad/).first()).toBeVisible();
  expect(errors).toEqual([]);
});
