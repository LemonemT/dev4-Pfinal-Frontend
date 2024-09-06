import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Incidents from './pages/Incidents';
import IncidentDetail from './pages/IncidentDetail';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/Navbar'; 

function App() {
  const { isAuthenticated, role } = useAuth();

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/" />} />
          <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/" />} />
          
          {/* Rutas protegidas */}
          <Route
            path="/incidents"
            element={isAuthenticated ? <Incidents /> : <Navigate to="/login" />}
          />
          <Route
            path="/incidents/:id"
            element={isAuthenticated ? <IncidentDetail /> : <Navigate to="/login" />}
          />
          {/* Ruta especial para administradores */}
          {isAuthenticated && role === 'admin' && (
            <Route
              path="/admin"
              element={<div className="min-h-screen flex items-center justify-center">Panel de administrador</div>}
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
