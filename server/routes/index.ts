import express, { Request, Response, NextFunction, Router } from 'express';

const RouterHandler: Router = express.Router();

RouterHandler.route('/')
  .get((req: Request, res: Response) => {
    res.send('GET: works');
  })
  .post((req: Request, res: Response) => {
    res.send('POST: works');
  });

RouterHandler.route('/shorten').post((req, res) => {
  const result = `${req.body.url} is saved as 'shorten.io/${generateUID()}'`;
  res.send(result);
});

export default RouterHandler;

// I generate the UID from two parts here
// to ensure the random number provide enough bits.
function generateUID() {
  let firstPart: number | string = (Math.random() * 46656) | 0;
  let secondPart: number | string = (Math.random() * 46656) | 0;
  firstPart = ('000' + firstPart.toString(36)).slice(-3);
  secondPart = ('000' + secondPart.toString(36)).slice(-3);
  return firstPart + secondPart;
}
