import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { logoutAdmin } from '../api/admin.api.js';
import { useAdmin } from '../context/AdminContext.jsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { resetAdmin } = useAdmin();

  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const logout = async () => {
    const res = await logoutAdmin();

    const { isAuthenticated } = await res.json();

    if (!isAuthenticated) {
      resetAdmin();
      navigate('/');
    }
  };
  return (
    <nav className="bg-white shadow-md px-6 py-4 rounded-2xl mb-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold text-gray-800">Mi Panel</div>

        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/turnos">Turnos</Link>
          </li>
          <li>
            <Link to="/configuracion">Configuración</Link>
          </li>
          <li>
            <Link to="/ayuda">Ayuda</Link>
          </li>
          <li>
            <button className="text-red-500">Salir</button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 md:hidden flex flex-col space-y-3 text-gray-700 font-medium">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/turnos">Turnos</Link>
          </li>
          <li>
            <Link to="/configuracion">Configuración</Link>
          </li>
          <li>
            <Link to="/ayuda">Ayuda</Link>
          </li>
          <li>
            <button onClick={() => logout()} className="text-red-500">
              Salir
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
