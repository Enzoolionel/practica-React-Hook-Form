import express from 'express';
import cors from 'cors';

import adminRouter from './routes/admin.route.js';
import { connectDB } from './connection.js';
import { PORT } from './config/env.js';
import session from 'express-session';

const app = express();
connectDB();

app.use(express.json());

app.set('trust proxy', 1);

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);

app.use(
  session({
    secret: 'alguna-clave-supersecreta',
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

app.use('/api', adminRouter);

app.listen(PORT, () => {
  console.log('Servidor Online...');
});
