import express, { Request, Response, NextFunction, Router } from 'express';
require('dotenv').config();
const RouterHandler: Router = express.Router();

import generateUID from '../services/drivers/uid';
import createConnection, { createShortenItem } from '../services/sql/index';

RouterHandler.route('/shorten').post(async (req: Request, res: Response) => {
  /**
   * TODO XSS, SQL, sanitizing, and validating the actual url of the input
   */
  if (req.body.url.trim().length < 7)
    return res.send({ error: 'Not valid link' });

  const newCreatedID = generateUID();

  await createShortenItem(req.body.url, newCreatedID);

  return res.send({ shorten: newCreatedID });
});

RouterHandler.route('/shorten/:shorten_id').get(
  (req: Request, res: Response) => {
    // get url params
    const shorten_id: string = req.params.shorten_id;

    // send request to db to find by the params
    const dbResponse = createConnection.query(
      `select * from links where shorten = '${shorten_id}'`,
      [],
      (err, dbResponse) => {
        if (err) throw err;
        // send back to the client
        return res.send(dbResponse[0]);
      }
    );
  }
);

export default RouterHandler;
