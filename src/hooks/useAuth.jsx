import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role');

    if (token && userRole) {
      setIsAuthenticated(true);
      setRole(userRole);
    } else {
      setIsAuthenticated(false);
      setRole('');
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setIsAuthenticated(false);
    setRole('');
  };

  return { isAuthenticated, role, logout };
};
