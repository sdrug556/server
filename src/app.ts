import { join } from 'path';
import express, { NextFunction, Request, Response, Router } from 'express';
import { config } from './app.config';
import { CorsMiddleware } from './middleware/cors.middleware';
import adjustmentstockRoute from './routes/adjustmentstock.route';
import authRoute from './routes/auth.route';
import categoryRoute from './routes/category.route';
import dashboardRoute from './routes/dashboard.route';
import historyRoute from './routes/history.route';
import productRoute from './routes/product.route';
import saleRoute from './routes/sales.route';
import supplierRoute from './routes/supplier.route';
import userRoute from './routes/user.route';
import cors from 'cors';

const app = express();

// app.use(CorsMiddleware.cors());
app.options('*', cors({
  origin: '*'
}));



app.use(express.json());

const defaultRoute = Router().get(
  '/',
  (req: Request, res: Response, next: NextFunction) => {
    res
    .status(200)
    .send(`App running in port: ${config.port}`);
    next();
  },
);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(defaultRoute);
app.use(authRoute);
app.use(userRoute);
app.use(productRoute);
app.use(supplierRoute);
app.use(categoryRoute);
app.use(adjustmentstockRoute);
app.use(historyRoute);
app.use(saleRoute);
app.use(dashboardRoute);

export default app;
