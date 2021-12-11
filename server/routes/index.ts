import express, { Request, Response, NextFunction, Router } from 'express';
require('dotenv').config();
const RouterHandler: Router = express.Router();

import {
  createShorten,
  getShortenById,
} from '../controllers/shorten.controller';

RouterHandler.route('/shorten').post(createShorten);

RouterHandler.route('/shorten/:shorten_id').get(getShortenById);

export default RouterHandler;
