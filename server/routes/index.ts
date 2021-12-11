import express, { Request, Response, NextFunction, Router } from 'express';

// because of mysql importing not finding env files
require('dotenv').config();
import { createShortenItem } from '../services/sql/index';

const RouterHandler: Router = express.Router();

RouterHandler.route('/shorten').post(async (req: Request, res: Response) => {
  /**
   * 1. Validate the input
   * TODO: XSS, SQL, sanitizing, and validating the actual url of the input
   */
  if (req.body.url.trim().length < 7)
    return res.send({ error: 'Not valid link' });

  const newCreatedID = generateUID();

  await createShortenItem(req.body.url, newCreatedID);

  return res.send({ shorten: newCreatedID });
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
