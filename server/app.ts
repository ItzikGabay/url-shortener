import express, { Express, Request, Response, NextFunction } from 'express';
import RouterHandler from './routes/index';
import cors from 'cors';
import mysql from 'mysql';
import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

const connection = mysql.createConnection({
  database: process.env.NAME,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
});

const app: Express = express();
const port: number = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: 'http://localhost:3000' }));
app.use(cors());

app.use('/', RouterHandler);

app.listen(port, () => {
  console.log(`url-shortener application is running on port ${port}.`);
});
