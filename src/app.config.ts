export const config = {
  port: 4201,
  jwtSecretKey: '25a6d0ecae2474b6f7872480d2d1aee6',
  database: {
    username: 'sdrug556', // process.env.PGUSER,
    password: 'NW5gyKchOhjejUjpGy1twrWNAJc3xHkA@dpg', // process.env.PGPASSWORD,
    database: 'pos_recu', // process.env.PGDATABASE,
    port: 5432,
    host: 'dpg-cfl3h89mbjsn9efresdg-a', // process.env.PGHOST,
  }
  // database: {
  //   username: process.env.PGUSER,
  //   password: process.env.PGPASSWORD,
  //   database: process.env.PGDATABASE,
  //   port: 5432,
  //   host: process.env.PGHOST,
  // }
};

