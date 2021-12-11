import express, { Request, Response, NextFunction, Router } from 'express';
require('dotenv').config();
const RouterHandler: Router = express.Router();

import validateURL from 'valid-url';
import generateUID from '../services/drivers/uid';
import createConnection, { createShortenItem } from '../services/sql/index';

RouterHandler.route('/shorten').post(async (req: Request, res: Response) => {
  /**
   * TODO XSS, SQL, sanitizing, and validating the actual url of the input
   */

  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;

  const regex = new RegExp(expression);

  if (!req.body.url.match(regex)) return res.send({ error: 'Not valid link' });

  const newCreatedID = generateUID();

  await createShortenItem(req.body.url, newCreatedID);

  return res.send({ shorten: newCreatedID });
});

RouterHandler.route('/shorten/:shorten_id').get(
  (req: Request, res: Response) => {
    // get url params
    const shorten_id: string = req.params.shorten_id;

    // send request to db to find by the params
    createConnection.query(
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
