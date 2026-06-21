// pages/Register.jsx
import React from 'react';
import { GRUPOS_DISPONIBLES, registrarAlumno } from '../services/authApi';

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: '',
    grupo: ''
  });

  const [grupos, setGrupos] = React.useState([]);
  const [error, setError] = React.useState('');
  // 👇 AQUÍ ESTABA EL ERROR DE DEDO, YA ESTÁ CORREGIDO 👇
  const [cargando, setCargando] = React.useState(false); 
  
  // Estados para los ojitos
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  React.useEffect(() => {
    setGrupos(GRUPOS_DISPONIBLES);
  }, []);

  // Refrescamos iconos cada que cambian las contraseñas
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  }, [showPassword, showConfirmPassword]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    if (!formData.nombre.trim()) { setError('El nombre es requerido'); setCargando(false); return; }
    if (!formData.apellido.trim()) { setError('El apellido es requerido'); setCargando(false); return; }
    if (!formData.email.includes('@')) { setError('Ingresa un email válido'); setCargando(false); return; }
    if (formData.password.length < 6) { setError('La contraseña debe tener al menos 6 caracteres'); setCargando(false); return; }
    if (formData.password !== formData.confirmPassword) { setError('Las contraseñas no coinciden'); setCargando(false); return; }
    if (!formData.grupo) { setError('Debe seleccionar un grupo'); setCargando(false); return; }

    try {
      await registrarAlumno({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        password: formData.password,
        grupo: formData.grupo,
      });

      setFormData({ nombre: '', apellido: '', email: '', password: '', confirmPassword: '', grupo: '' });
      onNavigate('Iniciar Sesión');
    } catch (submitError) {
      setError(submitError.message || 'No fue posible registrar la cuenta');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto fade-in">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6b2132] mb-6 text-center">Registro de Alumno</h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
            <i data-lucide="alert-circle" className="w-5 h-5"></i>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Ingresa tu nombre" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
            <input type="text" name="apellido" value={formData.apellido} onChange={handleInputChange} placeholder="Ingresa tu apellido" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="tu@correo.com" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition" />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Contraseña</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Mínimo 6 caracteres"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition pr-10"
              />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <i data-lucide={showPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Confirmar Contraseña</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Repite tu contraseña"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition pr-10"
              />
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
                <i data-lucide={showConfirmPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Grupo / Secuencia</label>
            <select name="grupo" value={formData.grupo} onChange={handleInputChange} required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition">
              <option value="">Selecciona tu grupo</option>
              {grupos.map((grupo) => <option key={grupo} value={grupo}>{grupo}</option>)}
            </select>
          </div>

          <div className="flex gap-3 mt-6">
            <button type="submit" disabled={cargando} className="flex-1 bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-400 transition flex items-center justify-center gap-2">
              <i data-lucide="user-check" className="w-5 h-5"></i>
              {cargando ? 'Registrando...' : 'Registrarse'}
            </button>
            <button type="button" onClick={() => onNavigate('Inicio')} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2">
              <i data-lucide="home" className="w-5 h-5"></i>
              Volver
            </button>
          </div>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          ¿Ya tienes cuenta? <button onClick={() => onNavigate('Iniciar Sesión')} className="text-[#6b2132] font-semibold hover:underline">Inicia sesión aquí</button>
        </p>
      </div>
    </div>
  );
};

export default Register;