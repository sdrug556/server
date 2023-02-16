import { Router } from 'express';
import { JwtMiddleware } from '../middleware/jwt.middleware';
import { AdjustmentStockController } from '../controllers/adjustmentstock.controller';
import { CorsMiddleware } from '../middleware/cors.middleware';

const adjustmentstockRoute = Router();

adjustmentstockRoute.get('/api/adjustmentstock', JwtMiddleware.verify, AdjustmentStockController.getAll);

adjustmentstockRoute.post('/api/adjustmentstock', JwtMiddleware.verify, AdjustmentStockController.create);

export default adjustmentstockRoute;




