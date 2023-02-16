import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';
import { JwtMiddleware } from '../middleware/jwt.middleware';
import { CorsMiddleware } from 'src/middleware/cors.middleware';

const authRoute = Router();

authRoute.post('/login', AuthController.login);

authRoute.get('/logout', JwtMiddleware.verify, CorsMiddleware.cors, AuthController.logout);

export default authRoute;
