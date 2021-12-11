import express, { Request, Response, NextFunction, Router } from 'express';

import generateUID from '../services/drivers/uid';
// import validateURL from 'valid-url';
import createConnection, { createShortenItem } from '../services/sql/index';

export const createShorten = async (req: Request, res: Response) => {
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
};

export const getShortenById = async (req: Request, res: Response) => {
  const shorten_id: string = req.params.shorten_id;

  createConnection.query(
    `select * from links where shorten = '${shorten_id}'`,
    [],
    (err, dbResponse) => {
      if (err) throw err;
      return res.send(dbResponse[0]);
    }
  );
};
