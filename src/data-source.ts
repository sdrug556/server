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

// const a = new Connection({
//   url: 'postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu',
//   type: 'postgres',
//   port: 5432
// })
// a.dropDatabase
// internal
// postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu
// external
// postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a.singapore-postgres.render.com/pos_recu
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'dpg-cfl3h89mbjsn9efresdg-a.singapore-postgres.render.com',
  port: 5432,
  username: 'sdrug556',
  password: 'NW5gyKchOhjejUjpGy1twrWNAJc3xHkA',
  database: 'pos_recu',
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
