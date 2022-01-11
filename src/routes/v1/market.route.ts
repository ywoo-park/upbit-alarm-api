import express from 'express';
import {getCodes} from '../../controllers/market.controller'

const marketRouter = express.Router();

marketRouter
    .route('/')
    .get(getCodes);

export {marketRouter};