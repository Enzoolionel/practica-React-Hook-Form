import Navbar from '../components/Navbar';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <Navbar />
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Bienvenido al Panel
          </h1>
          <p className="text-gray-600">
            Usá el menú de navegación para acceder a las secciones de Inicio,
            Turnos, Configuración, Ayuda o cerrar sesión.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
