import { Router } from 'express';
import { CorsMiddleware } from 'src/middleware/cors.middleware';
import { UserController } from '../controllers/user.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const userRoute = Router();

userRoute.get('/user', JwtMiddleware.verify, CorsMiddleware.cors, UserController.getAll);

userRoute.post('/user', JwtMiddleware.verify, CorsMiddleware.cors, UserController.create);

userRoute.put('/user/:id', JwtMiddleware.verify, CorsMiddleware.cors, UserController.update);

userRoute.delete('/user/:id', JwtMiddleware.verify, CorsMiddleware.cors, UserController.delete);

export default userRoute;

