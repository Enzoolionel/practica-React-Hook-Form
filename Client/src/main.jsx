import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import router from './router.jsx';
import { AdminProvider } from './context/adminContext.jsx';

createRoot(document.getElementById('root')).render(
  <AdminProvider>
    <RouterProvider router={router} />
  </AdminProvider>
);
