import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { CategoryController } from '../controllers/category.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const categoryRoute = Router();

categoryRoute.get('/api/category', JwtMiddleware.verify, CategoryController.getAll);

categoryRoute.post('/api/category', JwtMiddleware.verify, CategoryController.create);

categoryRoute.put('/api/category/:id', JwtMiddleware.verify, CategoryController.update);

categoryRoute.delete('/api/category/:id', JwtMiddleware.verify, CategoryController.delete);

export default categoryRoute;



