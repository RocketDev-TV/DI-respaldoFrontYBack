// pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow fade-in">
      <h2 className="text-2xl font-bold mb-6 text-[#6b2132]">Información de Contacto</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            <strong>Correo Institucional:</strong>{' '}
            <a href="mailto:smendez@ipn.mx" className="text-blue-600">
              smendez@ipn.mx
            </a>
          </p>
          <p className="mb-4">
            <strong>Correo Personal:</strong>{' '}
            <a href="mailto:sariuxg@gmail.com" className="text-blue-600">
              sariuxg@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Horario de atención: Lunes a Viernes de 10:00 a 14:00 hrs.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="font-bold mb-2">Enviar mensaje directo</h3>
          <textarea 
            className="w-full p-2 border rounded mb-2 text-sm" 
            rows="4" 
            placeholder="Escribe tu duda..."
          ></textarea>
          <button className="bg-[#6b2132] text-white px-4 py-2 rounded text-sm hover:bg-opacity-90">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;