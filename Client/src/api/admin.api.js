const url = 'http://localhost:3000/api/';

export const createAdmin = async (data) => {
  try {
    const res = await fetch(`${url}create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Error al crear el administrador');
    }

    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const loginAdmin = async (data) => {
  try {
    const res = await fetch(`${url}login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      credentials: 'include',
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Error al logear');
    }

    return await res.json();
  } catch (error) {
    console.error(error.message);
  }
};

export const dashboard = async () => {
  try {
    const res = await fetch(`${url}dashboard`, { credentials: 'include' });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'Error al obtener el dashboard');
    }

    return await res.json();
  } catch (error) {
    console.error('Error en getDashboard:', error);
    throw error;
  }
};

export const logoutAdmin = async () => {
  try {
    return await fetch(`${url}logout`, {
      credentials: 'include',
    });
  } catch (error) {
    console.error('Error al deslogiar:', error);
    throw error;
  }
};
