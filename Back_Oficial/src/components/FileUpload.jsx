// components/FileUpload.jsx
import React, { useState, useRef, useEffect } from 'react';

const MAX_FILE_SIZE_BYTES = 8 * 1024 * 1024;

const FileUpload = ({ onFileSelect, actividadId, onSubmit }) => {
  const [archivo, setArchivo] = useState(null);
  const [cargando, setCargando] = useState(false);
  const [arrastrando, setArrastrando] = useState(false);
  
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [archivo, arrastrando]);

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

  // Función unificada para validar peso y tipo de archivo, compartida por Click y Drop
  const validarYAsignarArchivo = (file) => {
    if (!file) return;

    if (file.size > MAX_FILE_SIZE_BYTES) {
      alert('El archivo es demasiado grande (máximo 8 MB para entrega en plataforma)');
      return;
    }

    const tiposPermitidos = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 
      'application/vnd.ms-excel', 
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 
      'application/zip', 
      'text/plain', 
      'image/jpeg', 
      'image/png'
    ];
    
    if (!tiposPermitidos.includes(file.type)) {
      alert('Tipo de archivo no permitido. Tipos válidos: PDF, Word, Excel, ZIP, TXT, JPG, PNG');
      return;
    }

    setArchivo(file);
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  const handleFileChange = (e) => {
    validarYAsignarArchivo(e.target.files[0]);
  };

  // --- DRAG AND DROP ---
  const handleDragOver = (e) => {
    e.preventDefault();
    setArrastrando(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setArrastrando(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setArrastrando(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validarYAsignarArchivo(e.dataTransfer.files[0]); // Procesa el archivo soltado
    }
  };

  const handleLimpiarArchivo = () => {
    setArchivo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
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
      handleLimpiarArchivo();
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
            
            {/* AREA DROPZONE INTERACTIVA */}
            <div 
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`flex items-center justify-center w-full px-4 py-4 border-2 border-dashed rounded-lg transition-all ${
                arrastrando 
                  ? 'border-[#6b2132] bg-rose-50/50 scale-[1.01]' 
                  : 'border-gray-300 hover:border-[#6b2132] bg-white'
              }`}
            >
              <div className="flex items-center gap-2 pointer-events-none">
                <i data-lucide="upload" className="w-5 h-5 text-gray-400"></i>
                <span className="text-sm text-gray-600 font-medium">
                  {archivo ? archivo.name : 'Selecciona o arrastra un archivo'}
                </span>
              </div>
            </div>

          </label>
          <input
            id={`file-input-${actividadId}`}
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.xls,.xlsx,.zip,.txt,.jpg,.jpeg,.png"
          />
        </div>

        {archivo && (
          <div className="flex items-center justify-between bg-green-50 p-3 rounded border border-green-200">
            <div className="flex items-center gap-2">
              <span className="text-green-600 font-bold text-lg">✓</span>
              <div>
                <p className="text-sm font-semibold text-green-800">{archivo.name}</p>
                <p className="text-xs text-green-600">{(archivo.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
            <button
              type="button"
              onClick={handleLimpiarArchivo}
              className="text-red-600 hover:text-red-800 font-bold text-xs bg-red-50 hover:bg-red-100 px-2 py-1.5 rounded transition-colors flex items-center gap-1"
              title="Quitar archivo"
            >
              ✕ Quitar
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