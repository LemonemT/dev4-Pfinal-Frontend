import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api'; 
import Navbar from '../components/Navbar'; 

const IncidentDetail = () => {
  const { id } = useParams();
  const [incident, setIncident] = useState(null);

  useEffect(() => {
    const fetchIncident = async () => {
      try {
        const response = await api.get(`/incidencias/${id}`);
        setIncident(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles de la incidencia:', error);
      }
    };

    fetchIncident();
  }, [id]);

  if (!incident) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{incident.titulo}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">{incident.descripcion}</p>
          <p className="font-semibold mb-2 text-gray-800">Tipo: {incident.tipo}</p>
          <p className="font-semibold mb-2 text-gray-800">Ubicación: {incident.ubicacion}</p>
          <p className="font-semibold mb-2 text-gray-800">Estado: {incident.estado}</p>
          {incident.imagenes && (
            <div className="mt-4">
              {incident.imagenes.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Imagen ${index}`}
                  className="w-full h-auto mb-2 rounded-lg shadow-sm"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IncidentDetail;
