import { Router } from 'express';
import { CorsMiddleware } from 'src/middleware/cors.middleware';
import { HistoryController } from '../controllers/history.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const historyRoute = Router();

historyRoute.get('/history/login', JwtMiddleware.verify, CorsMiddleware.cors, HistoryController.getAll);

export default historyRoute;