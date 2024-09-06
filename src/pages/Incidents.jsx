import React, { useEffect, useState } from 'react';
import api from '../api'; 
import Navbar from '../components/Navbar';
import LogoutButton from '../components/LogoutButton'; 

const Incidents = () => {
  const [incidents, setIncidents] = useState([]);

  useEffect(() => {
    const fetchIncidents = async () => {
      try {
        const response = await api.get('/incidencias');
        setIncidents(response.data);
      } catch (error) {
        console.error('Error al obtener incidencias:', error);
      }
    };

    fetchIncidents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Incidencias</h1>
          <LogoutButton />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {incidents.map((incident) => (
            <div
              key={incident.id}
              className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold">{incident.titulo}</h2>
              <p>{incident.descripcion}</p>
              <p className="mt-2 text-sm text-gray-500">Estado: {incident.estado}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Incidents;
