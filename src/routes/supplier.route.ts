import { Router } from 'express';
import { CorsMiddleware } from 'src/middleware/cors.middleware';
import { SupplierController } from '../controllers/supplier.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const supplierRoute = Router();

supplierRoute.get('/supplier', JwtMiddleware.verify, CorsMiddleware.cors, SupplierController.getAll);

supplierRoute.post('/supplier', JwtMiddleware.verify, CorsMiddleware.cors, SupplierController.create);

supplierRoute.put('/supplier/:id', JwtMiddleware.verify, CorsMiddleware.cors, SupplierController.update);

supplierRoute.delete('/supplier/:id', JwtMiddleware.verify, CorsMiddleware.cors, SupplierController.delete);

export default supplierRoute;



