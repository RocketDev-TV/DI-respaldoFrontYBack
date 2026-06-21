// pages/Register.jsx
import React from 'react';

const Register = ({ onNavigate }) => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    apellido: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar datos al servidor
    console.log('Datos de registro:', formData);
    alert('Registro completado');
    setFormData({ nombre: '', apellido: '', email: '', password: '' });
  };

  return (
    <div className="max-w-md mx-auto fade-in">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
        <h2 className="text-3xl font-bold text-[#6b2132] mb-6 text-center">Registro</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo Nombre */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleInputChange}
              placeholder="Ingresa tu nombre"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
            />
          </div>

          {/* Campo Apellido */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Apellido
            </label>
            <input
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleInputChange}
              placeholder="Ingresa tu apellido"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
            />
          </div>

          {/* Campo Email */}
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

          {/* Campo Contraseña */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Ingresa una contraseña segura"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6b2132] transition"
            />
          </div>

          {/* Botones */}
          <div className="flex gap-3 mt-6">
            <button
              type="submit"
              className="flex-1 bg-[#6b2132] text-white py-2 rounded-lg font-semibold hover:bg-opacity-90 transition flex items-center justify-center gap-2"
            >
              <i data-lucide="user-check" className="w-5 h-5"></i>
              Registrarse
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
      </div>
    </div>
  );
};

export default Register;