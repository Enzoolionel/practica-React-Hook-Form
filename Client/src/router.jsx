import { createBrowserRouter } from 'react-router';

import App from './App.jsx';
import AuthPublic from './layout/AuthPublic.jsx';
import PrivateRoute from './layout/PrivateRoute.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{ index: true, element: <AuthPublic /> }],
  },
  {
    element: <PrivateRoute />,
    children: [
      { path: 'dashboard', element: <DashboardLayout />, children: [] },
    ],
  },
]);

export default router;
