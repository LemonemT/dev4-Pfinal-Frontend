import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-red-500 bg-transparent border border-red-500 px-4 py-2 rounded hover:bg-red-500 hover:text-white transition duration-300"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
