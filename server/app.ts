import express, { Express, Request, Response, NextFunction } from 'express';
import RouterHandler from './routes/index';

const app: Express = express();
const port = 5000;

app.use('/', RouterHandler);

app.listen(port, () => {
  console.log(`url-shortener application is running on port ${port}.`);
});
