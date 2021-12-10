import express, { Request, Response, NextFunction, Router } from 'express';

const RouterHandler: Router = express.Router();

RouterHandler.route('/')
  .get((req: Request, res: Response) => {
    res.send('GET: works');
  })
  .post((req: Request, res: Response) => {
    res.send('POST: works');
  });

export default RouterHandler;
