import express, { Request, Response, NextFunction, Router } from 'express';

const RouterHandler: Router = express.Router();

RouterHandler.route('/shorten').post((req: Request, res: Response) => {
  /**
   * 1. Validate the input
   * TODO: XSS, SQL, sanitizing, and validating the actual url of the input
   */
  if (req.body.url.trim().length < 7)
    return res.send({ error: 'Not valid link' });

  /**
   * 2. Send back to the user the shorten link
   */
  const result = {
    shorten: `${generateUID()}`,
    original: req.body.url,
  };
  return res.send(result);
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
