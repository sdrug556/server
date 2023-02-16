import { Router } from 'express';
import { CorsMiddleware } from 'src/middleware/cors.middleware';
import { ProductController } from '../controllers/product.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const productRoute = Router();

productRoute.get('/product/supplier/:id', JwtMiddleware.verify, CorsMiddleware.cors, ProductController.getAllBySupplierId);

productRoute.get('/product', JwtMiddleware.verify, CorsMiddleware.cors, ProductController.getAll);

productRoute.post('/product', JwtMiddleware.verify, CorsMiddleware.cors, ProductController.create);

productRoute.put('/product/:id', JwtMiddleware.verify, CorsMiddleware.cors, ProductController.update);

productRoute.delete('/product/:id', JwtMiddleware.verify, CorsMiddleware.cors, ProductController.delete);

export default productRoute;