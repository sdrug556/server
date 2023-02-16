import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { ProductController } from '../controllers/product.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const productRoute = Router();

productRoute.get('/api/product/supplier/:id', JwtMiddleware.verify, ProductController.getAllBySupplierId);

productRoute.get('/api/product', JwtMiddleware.verify, ProductController.getAll);

productRoute.post('/api/product', JwtMiddleware.verify, ProductController.create);

productRoute.put('/api/product/:id', JwtMiddleware.verify, ProductController.update);

productRoute.delete('/api/product/:id', JwtMiddleware.verify, ProductController.delete);

export default productRoute;
