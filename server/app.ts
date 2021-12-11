import express, { Express, Request, Response, NextFunction } from 'express';
import RouterHandler from './routes/index';
import cors from 'cors';

import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

import createConnection from './services/sql/index';
// findLinkById("test");

// createConnection.query('')
// createConnection.query(`select * from links where id = 1`, [], (err, res) => {
//   if (err) throw err;
//   console.log(res[0].original);
//   return res;
// });

const app: Express = express();
const port: number = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', RouterHandler);

app.listen(port, () => {
  console.log(`url-shortener application is running on port ${port}.`);
});
