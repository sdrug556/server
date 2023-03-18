import { Router } from 'express';
import { SaleController } from '../controllers/sales.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const saleRoute = Router();

saleRoute.get('/api/sale/today', JwtMiddleware.verify, SaleController.today);

saleRoute.get('/api/sale', JwtMiddleware.verify, SaleController.get);

saleRoute.post('/api/sale/cancel', JwtMiddleware.verify, SaleController.cancel);

saleRoute.post('/api/sale', JwtMiddleware.verify, SaleController.create);

saleRoute.get('/api/sale/closing', JwtMiddleware.verify, SaleController.getClosingSales);

saleRoute.post('/api/sale/closing', JwtMiddleware.verify, SaleController.addClosingSales);

export default saleRoute;
