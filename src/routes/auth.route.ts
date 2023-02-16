import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';
import { JwtMiddleware } from '../middleware/jwt.middleware';
import { CorsMiddleware } from '../middleware/cors.middleware';

const authRoute = Router();

authRoute.post('/api/login', AuthController.login);

authRoute.get('/api/logout', JwtMiddleware.verify, AuthController.logout);

export default authRoute;
