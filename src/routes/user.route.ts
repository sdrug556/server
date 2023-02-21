import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const userRoute = Router();

userRoute.get('/api/user', JwtMiddleware.verify, UserController.getAll);

userRoute.post('/api/user', JwtMiddleware.verify, UserController.create);

userRoute.put('/api/user/:id', JwtMiddleware.verify, UserController.update);

userRoute.delete('/api/user/:id', JwtMiddleware.verify, UserController.delete);

export default userRoute;

