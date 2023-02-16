import { Router } from 'express';
import { CorsMiddleware } from 'src/middleware/cors.middleware';
import { CategoryController } from '../controllers/category.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const categoryRoute = Router();

categoryRoute.get('/category', JwtMiddleware.verify, CorsMiddleware.cors, CategoryController.getAll);

categoryRoute.post('/category', JwtMiddleware.verify, CorsMiddleware.cors, CategoryController.create);

categoryRoute.put('/category/:id', JwtMiddleware.verify, CorsMiddleware.cors, CategoryController.update);

categoryRoute.delete('/category/:id', JwtMiddleware.verify, CorsMiddleware.cors, CategoryController.delete);

export default categoryRoute;



