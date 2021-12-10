import express, { Express, Request, Response, NextFunction } from 'express';
import RouterHandler from './routes/index';
import cors from 'cors';

const app: Express = express();
const port: number = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost/' }));

app.use('/', RouterHandler);

app.listen(port, () => {
  console.log(`url-shortener application is running on port ${port}.`);
});
