import mongoose from 'mongoose';
import { DB_URL } from './config/env.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);

    console.log('🚀 Base de datos conectada correctamente ✅');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
