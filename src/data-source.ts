import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { AdjustmentStock } from './entity/adjustmentstock';
import { Category } from './entity/Category';
import { History } from './entity/History';
import { Invoice } from './entity/Invoice';
import { Product } from './entity/Product';
import { Sales } from './entity/Sales';
import { Supplier } from './entity/Supplier';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cfl33p9mbjsn9efp9hlg-a',
  port: 5432,
  username: 'admin',
  password: 'KBaNNAj0nORbxVWoa0IWnVgEprfPWdPd',
  database: 'pos_podi',
  entities: [
    User,
    Category,
    Invoice,
    Product,
    Supplier,
    AdjustmentStock,
    History,
    Sales,
  ],
  migrations: [],
  subscribers: [],
});
