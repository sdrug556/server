import { Router } from 'express';
import { SupplierController } from '../controllers/supplier.controller';
import { JwtMiddleware } from '../middleware/jwt.middleware';

const supplierRoute = Router();

supplierRoute.get(
  '/api/supplier',
  JwtMiddleware.verify,
  SupplierController.getAll,
);

supplierRoute.post(
  '/api/supplier',
  JwtMiddleware.verify,
  SupplierController.create,
);

supplierRoute.put(
  '/api/supplier/:id',
  JwtMiddleware.verify,
  SupplierController.update,
);

supplierRoute.delete(
  '/api/supplier/:id',
  JwtMiddleware.verify,
  SupplierController.delete,
);

supplierRoute.post(
  '/api/supplier/request-order',
  JwtMiddleware.verify,
  SupplierController.requestOrder,
);

export default supplierRoute;
