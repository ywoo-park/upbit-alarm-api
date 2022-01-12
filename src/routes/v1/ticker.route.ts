import express from 'express';
import {getTicker} from '../../controllers/ticker.controller'

const tickerRouter = express.Router();

tickerRouter
    .route('/')
    .get(getTicker);

export {tickerRouter};