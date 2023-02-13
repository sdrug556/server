import 'reflect-metadata';
import { DataSource, Connection } from 'typeorm';
import { AdjustmentStock } from './entity/adjustmentstock';
import { Category } from './entity/Category';
import { History } from './entity/History';
import { Invoice } from './entity/Invoice';
import { Product } from './entity/Product';
import { Sales } from './entity/Sales';
import { Supplier } from './entity/Supplier';
import { User } from './entity/User';

// const a = new Connection({
//   url: 'postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu',
//   type: 'postgres',
//   port: 5432
// })
// a.dropDatabase

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cfl33p9mbjsn9efp9hlg-a',
  port: 5432,
  username: 'admin',
  password: 'KBaNNAj0nORbxVWoa0IWnVgEprfPWdPd',
  // url: 'postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu',
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
