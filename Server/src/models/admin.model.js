import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  // apellido: {
  //   type: String,
  //   required: true,
  //   trim: true,
  // },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  negocioId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Negocio',
    default: null,
  },
});

const Admin = mongoose.model('Admin', adminSchema, 'administradores');

export default Admin;
