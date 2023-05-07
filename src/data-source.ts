import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AdjustmentStock } from './entity/adjustmentstock';
import { Bills } from './entity/Bills';
import { Category } from './entity/Category';
import { History } from './entity/History';
import { Invoice } from './entity/Invoice';
import { Notes } from './entity/Notes';
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

const entities = [
  User,
  Category,
  Invoice,
  Product,
  Supplier,
  AdjustmentStock,
  History,
  Sales,
  Notes,
  Bills,
];

if (Boolean(process.env.APP_DATASOURCE_URL)) {
  console.log(
    `Database url found: ${process.env.APP_DATASOURCE_URL}, will use this config`,
  );
}

export const isDevelopment = !Boolean(process.env.APP_NAME);
if (isDevelopment) {
  process.env.APP_HOST = 'localhost';
  process.env.APP_PORT = '5432';
  process.env.APP_USERNAME = 'postgres';
  process.env.APP_PASSWORD = 'A1a$';
  process.env.APP_DATABASE = 'pos';
}

const config: DataSourceOptions = Boolean(process.env.APP_DATASOURCE_URL)
  ? {
      type: 'postgres',
      // name: process.env.APP_NAME, // 'pos-postgres',
      url: process.env.APP_DATASOURCE_URL,
      entities,
      port: 5432,
      migrations: [],
      subscribers: [],
      connectTimeoutMS: 7200,
      ssl: !isDevelopment,
      maxQueryExecutionTime: 7200,
    }
  : {
      type: 'postgres',
      name: process.env.APP_NAME,
      host: process.env.APP_HOST,
      port: parseInt(process.env.APP_PORT),
      username: process.env.APP_USERNAME,
      password: process.env.APP_PASSWORD,
      database: process.env.APP_DATABASE,
      entities,
      migrations: [],
      subscribers: [],
      connectTimeoutMS: 7200,
      ssl: !isDevelopment,
      maxQueryExecutionTime: 7200,
    };
export const AppDataSource = new DataSource(config);
