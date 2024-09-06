import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Navbar = () => {
  const { isAuthenticated, role, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Gestión de Incidencias</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Inicio</Link>
          {isAuthenticated && (
            <>
              <Link to="/incidents" className="hover:underline">Incidencias</Link>
              <button onClick={logout} className="hover:underline">Cerrar sesión</button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Link to="/login" className="hover:underline">Login</Link>
              <Link to="/register" className="hover:underline">Registro</Link>
            </>
          )}
          {isAuthenticated && role === 'admin' && (
            <Link to="/admin" className="hover:underline">Panel de Admin</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
