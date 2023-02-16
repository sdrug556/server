import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { DashboardController } from '../controllers/dashboard.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const dashboardRoute = Router();

dashboardRoute.get('/dashboard', JwtMiddleware.verify, CorsMiddleware.cors, DashboardController.get);

export default dashboardRoute;
