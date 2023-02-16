import { Router } from 'express';
import { JwtMiddleware } from '../middleware/jwt.middleware';
import { AdjustmentStockController } from '../controllers/adjustmentstock.controller';
import { CorsMiddleware } from 'src/middleware/cors.middleware';

const adjustmentstockRoute = Router();

adjustmentstockRoute.get('/adjustmentstock', JwtMiddleware.verify, CorsMiddleware.cors, AdjustmentStockController.getAll);

adjustmentstockRoute.post('/adjustmentstock', JwtMiddleware.verify, CorsMiddleware.cors, AdjustmentStockController.create);

export default adjustmentstockRoute;




