import React from 'react';
import Navbar from '../components/Navbar'; 

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          Bienvenido a la Plataforma de Gestión de Incidencias
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Aquí puedes reportar incidencias y gestionar problemas en el edificio. Usa el menú para navegar a las diferentes secciones.
        </p>
        <a
          href="/incidents"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Ver Incidencias
        </a>
      </div>
    </div>
  );
};

export default Home;
