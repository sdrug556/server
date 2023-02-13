"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const adjustmentstock_1 = require("./entity/adjustmentstock");
const Category_1 = require("./entity/Category");
const History_1 = require("./entity/History");
const Invoice_1 = require("./entity/Invoice");
const Product_1 = require("./entity/Product");
const Sales_1 = require("./entity/Sales");
const Supplier_1 = require("./entity/Supplier");
const User_1 = require("./entity/User");
// const a = new Connection({
//   url: 'postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu',
//   type: 'postgres',
//   port: 5432
// })
// a.dropDatabase
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'dpg-cfl33p9mbjsn9efp9hlg-a',
    port: 5432,
    username: 'admin',
    password: 'KBaNNAj0nORbxVWoa0IWnVgEprfPWdPd',
    // url: 'postgres://sdrug556:NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg-cfl3h89mbjsn9efresdg-a/pos_recu',
    database: 'pos_podi',
    entities: [
        User_1.User,
        Category_1.Category,
        Invoice_1.Invoice,
        Product_1.Product,
        Supplier_1.Supplier,
        adjustmentstock_1.AdjustmentStock,
        History_1.History,
        Sales_1.Sales,
    ],
    migrations: [],
    subscribers: [],
});
