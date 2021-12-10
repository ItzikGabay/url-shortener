import express, { Express, Request, Response, NextFunction } from 'express';

const app: Express = express();
const port = 5000;

app.listen(port, () => {
  console.log(`url-shortener application is running on port ${port}.`);
});
