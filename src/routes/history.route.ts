import { Router } from 'express';
import { CorsMiddleware } from '../middleware/cors.middleware';
import { HistoryController } from '../controllers/history.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const historyRoute = Router();

historyRoute.get('/api/history/login', JwtMiddleware.verify, HistoryController.getAll);

export default historyRoute;
