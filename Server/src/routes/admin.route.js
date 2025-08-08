import { Router } from 'express';
import {
  createAdmin,
  dashboard,
  getAdmins,
  loginAdmin,
  logout,
} from '../controllers/admin.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';

const adminRouter = Router();

adminRouter.get('/', getAdmins);
adminRouter.post('/create', createAdmin);
adminRouter.post('/login', loginAdmin);
adminRouter.get('/dashboard', requireAuth, dashboard);
adminRouter.get('/logout', requireAuth, logout);

export default adminRouter;
