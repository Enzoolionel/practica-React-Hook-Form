import { Navigate, Outlet } from 'react-router';
import { useEffect, useState } from 'react';
import { dashboard } from '../api/admin.api.js';
import { useAdmin } from '../context/AdminContext.jsx';

const PrivateRoute = () => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { setAdmin } = useAdmin();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await dashboard();

        if (!res.user) {
          setIsAuthenticated(false);
          return;
        }

        setAdmin(res.user);
        setIsAuthenticated(true);
      } catch (err) {
        setIsAuthenticated(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) return <div>Cargando...</div>;

  if (!isAuthenticated) return <Navigate to="/" replace />;

  return <Outlet />;
};

export default PrivateRoute;
