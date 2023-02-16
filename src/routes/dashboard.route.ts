import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { DashboardController } from '../controllers/dashboard.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const dashboardRoute = Router();

dashboardRoute.get('/api/dashboard', JwtMiddleware.verify, DashboardController.get);

export default dashboardRoute;
