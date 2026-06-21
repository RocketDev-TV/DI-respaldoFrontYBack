// pages/Login.jsx
import React, { useState, useEffect } from 'react';
import { gql } from '@apollo/client/core';
import { useMutation } from '@apollo/client/react';
import { guardarSesionAuth } from '../utils/localStorage';
import { iniciarSesionAlumno } from '../services/authApi';

// =========================================================================
// 1. DEFINIMOS LAS MUTATIONS EXACTAMENTE COMO LAS PUSIMOS EN EL BACKEND
// =========================================================================
const SOLICITAR_RECUPERACION = gql`
  mutation SolicitarRecuperacionPassword($email: String!) {
    solicitarRecuperacionPassword(datos: { email: $email })
  }
`;

const RESTABLECER_PASSWORD = gql`
  mutation RestablecerPassword($email: String!, $codigo: String!, $nuevoPassword: String!) {
    restablecerPassword(datos: { email: $email, codigo: $codigo, nuevoPassword: $nuevoPassword })
  }
`;

const Login = ({ onNavigate, onLoginSuccess }) => {
  // --- ESTADOS DEL LOGIN NORMAL ---
  const [formData, setFormData] = React.useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = React.useState('');
  const [cargando, setCargando] = React.useState(false);

  // --- ESTADOS PARA LA RECUPERACIÓN DE CONTRASEÑA ---
  const [vista, setVista] = useState('login'); // login, pedirCorreo, cambiarPassword
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [recoveryCode, setRecoveryCode] = useState('');
  const [newRecoveryPassword, setNewRecoveryPassword] = useState('');

  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }, [vista, showPassword, error]);

  // =========================================================================
  // 2. INYECTAMOS LOS HOOKS DE APOLLO
  // =========================================================================
  const [solicitarRecuperacion] = useMutation(SOLICITAR_RECUPERACION);
  const [restablecerPassword] = useMutation(RESTABLECER_PASSWORD);

  // --- FUNCIONES DEL LOGIN NORMAL ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCargando(true);
    setError('');

    if (!formData.email || !formData.password) {
      setError('Por favor completa todos los campos');
      setCargando(false);
      return;
    }

    try {
      const resultado = await iniciarSesionAlumno(formData);
      guardarSesionAuth(resultado);
      setFormData({ email: '', password: '' });

      if (onLoginSuccess) {
        onLoginSuccess(resultado.usuario);
      } else {
        switch (resultado.usuario.tipo) {
          case 'alumno': onNavigate('Panel del Alumno'); break;
          case 'moderador': onNavigate('Panel de Moderación'); break;
          case 'administrador': onNavigate('Panel de Administración'); break;
          default: onNavigate('Inicio');
        }
      }
    } catch (submitError) {
      setError(submitError.message || 'No fue posible iniciar sesión');
    } finally {
      setCargando(false);
    }
  };

  // =========================================================================
  // 3. FUNCIONES DE RECUPERACIÓN CONECTADAS AL BACKEND REAL
  // =========================================================================
  const handleSolicitarCodigo = async (e) => {
    e.preventDefault();
    setError('');
    setCargando(true);
    
    try {
      await solicitarRecuperacion({
        variables: { 
          email: recoveryEmail
        }
      });
      
      setVista('cambiarPassword');
    } catch (err) {
      setError(err.message || 'Error al solicitar el código');
    } finally {
      setCargando(false);
    }
  };

  const handleRestablecerPassword = async (e) => {
    e.preventDefault();
    setError('');

    if (newRecoveryPassword.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres');
      return;
    }

    setCargando(true);

    try {
      await restablecerPassword({
        variables: {
          email: recoveryEmail,
          codigo: recoveryCode,
          nuevoPassword: newRecoveryPassword 
        }
      });
      
      alert('¡Contraseña actualizada con éxito! Ya puedes iniciar sesión.');
      
      setVista('login');
      setRecoveryEmail('');
      setRecoveryCode('');
      setNewRecoveryPassword('');
    } catch (err) {
      setError(err.message || 'No se pudo restablecer la contraseña');
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="max-w-md mx-auto fade-in">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 flex items-center gap-2">
            <i data-lucide="alert-circle" className="w-5 h-5"></i>
            <span className="text-sm font-medium">{error}</span>
          </div>
        )}

        {/* =========================================
            VISTA 1: LOGIN NORMAL
        ========================================= */}
        {vista === 'login' && (
          <>
            <h2 className="text-3xl font-bold text-[#6b2132] mb-2 text-center">Iniciar Sesión</h2>
            <p className="text-center text-gray-600 text-sm mb-6">Accede a tu plataforma de aprendizaje</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="tu@correo.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu contraseña"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <i data-lucide={showPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
                  </button>
                </div>

                <div className="flex justify-end mt-2 mb-4">
                  <button
                    type="button"
                    onClick={() => {
                      setError('');
                      setVista('pedirCorreo');
                    }}
                    className="text-sm text-[#6b2132] hover:text-opacity-80 hover:underline font-medium"
                  >
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={cargando}
                  className="flex-1 bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-400 transition flex items-center justify-center gap-2"
                >
                  <i data-lucide="log-in" className="w-5 h-5"></i>
                  {cargando ? 'Entrando...' : 'Iniciar Sesión'}
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('Inicio')}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition flex items-center justify-center gap-2"
                >
                  <i data-lucide="home" className="w-5 h-5"></i>
                  Volver
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="bg-blue-50 p-3 rounded-lg text-xs text-blue-800">
                <p className="font-semibold mb-1">Acceso con backend</p>
                <p>Usuarios soportados: alumnos, moderadores y administradores.</p>
              </div>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              ¿No tienes cuenta? <button onClick={() => onNavigate('Registrarse')} className="text-[#6b2132] font-semibold hover:underline">Regístrate aquí</button>
            </p>
          </>
        )}

        {/* =========================================
            VISTA 2: PEDIR CORREO PARA CÓDIGO
        ========================================= */}
        {vista === 'pedirCorreo' && (
          <>
            <h2 className="text-2xl font-bold text-[#6b2132] mb-2 text-center">Recuperar Contraseña</h2>
            <p className="text-center text-gray-600 text-sm mb-6">
              Ingresa tu correo institucional y te enviaremos un código de recuperación.
            </p>

            <form onSubmit={handleSolicitarCodigo} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
                />
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={cargando}
                  className="flex-1 bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-400 transition"
                >
                  {cargando ? 'Enviando...' : 'Enviar Código'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setVista('login');
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}

        {/* =========================================
            VISTA 3: INGRESAR CÓDIGO Y NUEVO PASSWORD
        ========================================= */}
        {vista === 'cambiarPassword' && (
          <>
            <h2 className="text-2xl font-bold text-[#6b2132] mb-2 text-center">Código Enviado</h2>
            <p className="text-center text-gray-600 text-sm mb-6">
              Revisa tu bandeja de entrada o spam. Tienes 15 minutos para usar el código.
            </p>

            <form onSubmit={handleRestablecerPassword} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Código de 6 dígitos
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={recoveryCode}
                  onChange={(e) => setRecoveryCode(e.target.value)}
                  placeholder="Ej: 123456"
                  required
                  className="w-full px-4 py-2 text-center tracking-widest font-mono text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Nueva Contraseña
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newRecoveryPassword}
                    onChange={(e) => setNewRecoveryPassword(e.target.value)}
                    placeholder="Crea una contraseña segura"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <i data-lucide={showPassword ? "eye-off" : "eye"} className="w-5 h-5"></i>
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="submit"
                  disabled={cargando}
                  className="flex-1 bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 disabled:bg-gray-400 transition"
                >
                  {cargando ? 'Actualizando...' : 'Actualizar Contraseña'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setError('');
                    setVista('login');
                  }}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default Login;