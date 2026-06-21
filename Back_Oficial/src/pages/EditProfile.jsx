import React, { useState, useEffect } from 'react';
import { guardarUsuarioLogueado, obtenerSesionAuth } from '../utils/localStorage';

const EditProfile = ({ usuario, onNavigate }) => {
  const [formData, setFormData] = useState({
    nombre: usuario?.nombre || '',
    apellido: usuario?.apellido || '',
    email: usuario?.email || '',
    password: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [showPassword]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función clave para reciclar el componente entre Alumnos y Moderadores
  const obtenerDestinoPanel = () => {
    if (usuario?.tipo === 'moderador' || usuario?.tipo === 'docente') {
      return 'Panel de Moderación';
    }
    if (usuario?.tipo === 'administrador') {
      return 'Panel de Administración';
    }
    return 'Panel del Alumno';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (formData.password.trim() !== '' && formData.password.length < 6) {
      alert('La nueva contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

    try {
      const variablesInput = {
        id: Number(usuario?.id),
        nombre: formData.nombre.trim(),
        apellido: formData.apellido.trim(),
        email: formData.email.toLowerCase().trim(),
      };

      if (formData.password.trim() !== '') {
        variablesInput.password = formData.password;
      }

      const sesion = obtenerSesionAuth();
      const BACKEND_URL = 'http://localhost:3000/graphql'; 

      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sesion?.token || ''}`
        },
        body: JSON.stringify({
            query: `
            mutation ActualizarMiPerfil($datos: UpdateUsuarioInput!) {
                actualizarMiPerfil(datos: $datos) {
                  id
                  nombre
                  apellido
                  email
                }
            }
            `,
          variables: {
            datos: variablesInput
          }
        })
      });

      const result = await response.json();

      if (result.errors) {
        throw new Error(result.errors[0].message);
      }

      alert('¡Perfil actualizado con éxito!');
      
      const usuarioActualizado = { ...usuario, ...variablesInput };
      delete usuarioActualizado.password; 
      
      guardarUsuarioLogueado(usuarioActualizado); 

      // Redirección dinámica basada en el rol del usuario logueado
      onNavigate(obtenerDestinoPanel());
      window.location.reload(); 
      
    } catch (error) {
      console.error("Error al actualizar perfil:", error);
      alert(`Hubo un error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-4">Editar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b2132] outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Apellido</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b2132] outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b2132] outline-none" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nueva Contraseña (Opcional)</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                name="password" 
                placeholder="••••••••" 
                value={formData.password} 
                onChange={handleChange} 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6b2132] outline-none pr-10" 
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <i data-lucide={showPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100 mt-6">
          <button 
            type="button"
            onClick={() => onNavigate(obtenerDestinoPanel())} 
            className="text-gray-600 hover:text-gray-800 font-medium flex items-center gap-2 transition-colors"
          >
            <i data-lucide="arrow-left" className="w-4 h-4"></i>
            Volver al Panel
          </button>
          <button 
            type="submit" 
            disabled={loading}
            className={`bg-[#6b2132] text-white px-6 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium ${
              loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#5a1b2a]'
            }`}
          >
            <i data-lucide="save" className="w-4 h-4"></i>
            {loading ? 'Guardando...' : 'Guardar Cambios'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;