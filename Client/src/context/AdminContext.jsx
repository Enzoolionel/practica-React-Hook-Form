import { createContext, useContext, useEffect, useState } from 'react';

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState({});

  useEffect(() => {
    console.log(admin);
  }, [admin]);

  const resetAdmin = () => {
    setAdmin({});
  };

  return (
    <AdminContext.Provider value={{ admin, setAdmin, resetAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAdmin = () => useContext(AdminContext);
