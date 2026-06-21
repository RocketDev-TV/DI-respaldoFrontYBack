// components/FileUpload.jsx
import React, { useState } from 'react';

const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;

const FileUpload = ({ onFileSelect, actividadId, onSubmit }) => {
  const [archivo, setArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);

  const leerComoBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const result = typeof reader.result === 'string' ? reader.result : '';
        resolve(result.split(',')[1] || '');
      };
      reader.onerror = () => reject(new Error('No fue posible leer el archivo.'));
      reader.readAsDataURL(file);
    });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // El archivo viaja como base64 dentro de GraphQL, así que el payload real crece.
      if (file.size > MAX_FILE_SIZE_BYTES) {
        alert('El archivo es demasiado grande (máximo 8 MB para entrega en plataforma)');
        return;
      }

      // Validar tipo de archivo
      const tiposPermitidos = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/zip', 'text/plain', 'image/jpeg', 'image/png'];
      
      if (!tiposPermitidos.includes(file.type)) {
        alert('Tipo de archivo no permitido. Tipos válidos: PDF, Word, Excel, ZIP, TXT, JPG, PNG');
        return;
      }

      setArchivo(file);
      if (onFileSelect) {
        onFileSelect(file);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) {
      alert('Por favor selecciona un archivo');
      return;
    }

    setCargando(true);
    try {
      const archivoBase64 = await leerComoBase64(archivo);
      if (onSubmit) {
        await onSubmit(
          {
            archivo,
            archivoBase64,
            nombreArchivo: archivo.name,
            mimeType: archivo.type || 'application/octet-stream',
            tamano: archivo.size,
          },
          actividadId,
        );
      }
      setArchivo(null);
      document.getElementById(`file-input-${actividadId}`).value = '';
    } catch (error) {
      alert(
        error.message ||
          'No fue posible subir el archivo. Verifica que no exceda el limite y vuelve a intentar.',
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center gap-3">
          <label htmlFor={`file-input-${actividadId}`} className="flex-1 cursor-pointer">
            <div className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#6b2132] transition">
              <div className="flex items-center gap-2">
                <i data-lucide="upload" className="w-5 h-5 text-gray-400"></i>
                <span className="text-sm text-gray-600">
                  {archivo ? archivo.name : 'Selecciona o arrastra un archivo'}
                </span>
              </div>
            </div>
          </label>
          <input
            id={`file-input-${actividadId}`}
            type="file"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.txt,.jpg,.jpeg,.png"
          />
        </div>

        {archivo && (
          <div className="flex items-center justify-between bg-green-50 p-3 rounded border border-green-200">
            <div className="flex items-center gap-2">
              <i data-lucide="check-circle" className="w-5 h-5 text-green-600"></i>
              <div>
                <p className="text-sm font-semibold text-green-800">{archivo.name}</p>
                <p className="text-xs text-green-600">{(archivo.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setArchivo(null);
                document.getElementById(`file-input-${actividadId}`).value = '';
              }}
              className="text-red-600 hover:text-red-800"
            >
              <i data-lucide="x" className="w-5 h-5"></i>
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={!archivo || cargando}
          className="w-full bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-400 transition flex items-center justify-center gap-2"
        >
          {cargando ? (
            <>
              <i data-lucide="loader" className="w-5 h-5 animate-spin"></i>
              Subiendo...
            </>
          ) : (
            <>
              <i data-lucide="check" className="w-5 h-5"></i>
              Entregar Archivo
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
