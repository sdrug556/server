import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { SaleController } from '../controllers/sales.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const saleRoute = Router();

saleRoute.get('/sale/today', JwtMiddleware.verify, CorsMiddleware.cors, SaleController.today);

saleRoute.get('/sale', JwtMiddleware.verify, CorsMiddleware.cors, SaleController.get);

saleRoute.post('/sale/cancel', JwtMiddleware.verify, CorsMiddleware.cors, SaleController.cancel);

saleRoute.post('/sale', JwtMiddleware.verify, CorsMiddleware.cors, SaleController.create);

export default saleRoute;
