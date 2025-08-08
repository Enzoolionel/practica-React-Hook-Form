import { comparePassword, hashPassword } from '../utils/bcrypt.js';

import Admin from '../models/admin.model.js';

export const getAdmins = async (req, res) => {
  try {
    const findAllAdmins = await Admin.find();

    res.json({ admins: findAllAdmins });
  } catch (error) {
    console.log(error.message);
  }
};

export const createAdmin = async (req, res) => {
  try {
    //buscamos que el email no exista
    const findEmail = await Admin.findOne({ email: req.body.email });
    //si existe lanza error
    if (findEmail) {
      return res.status(400).json({ message: 'El Email esta en uso...' });
    }
    //hasheamos password para mas seguridad
    const passwordHashed = await hashPassword(req.body.password);
    //creamos una variable con el objeto nuevo administrador con lo que trae mas el password ya seguro
    const newAdmin = new Admin({ ...req.body, password: passwordHashed });
    //guardamos el nuevo administrador en la bd
    await newAdmin.save();
    //respondemos al frontend con la session
    req.session.user = {
      nombre: req.body.nombre,
      isAuthenticated: true,
    };

    req.session.save((err) => {
      if (err) {
        console.error('Error al guardar sesión:', err);
        return res.status(500).json({ message: 'Error del servidor' });
      }

      res.json({
        message: 'Registrado',
        user: req.session.user,
      });

      console.log('usuario creado');
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    console.log(req.body);
    //buscamos email
    const findEmail = await Admin.findOne({ email: req.body.email });
    //si no lo encuentra lanza error
    if (!findEmail) {
      return res.status(404).json({ message: 'Error de credenciales' });
    }
    //comparamos password de la bd con el input
    const isPassword = comparePassword(req.body.password, findEmail.password);

    //!isPassword ? false : true
    if (!isPassword) {
      return res.status(404).json({ message: 'Error de credenciales' });
    }

    req.session.user = {
      id: findEmail._id,
      nombre: findEmail.nombre,
      negocioId: findEmail.negocioId,
      isAuthenticated: true,
    };

    req.session.save((err) => {
      if (err) {
        console.error('Error al guardar sesión:', err);
        return res.status(500).json({ message: 'Error del servidor' });
      }

      res.json({
        message: 'Bienvenido',
        user: req.session.user,
      });

      console.log('usuario logeado');
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'Error del servidor' });
  }
};

export const logout = (req, res) => {
  const { nombre } = req.session.user;
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ mensaje: 'Error al cerrar sesión' });
    res.clearCookie('connect.sid');
    res.json({ message: `${nombre} se desconeto.`, isAuthenticated: false });
  });
};

export const dashboard = async (req, res) => {
  const id = req.session.user.id;

  const admin = await Admin.findById(id);

  if (!admin) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  req.session.user = {
    id: admin._id,
    nombre: admin.nombre,
    negocioId: admin.negocioId,
    isAuthenticated: true,
  };

  res.json({
    user: req.session.user,
  });
};
