import express from 'express';
import {getAccounts} from '../../controllers/account.controller'

const accountRouter = express.Router();

accountRouter
    .route('/')
    .get(getAccounts);

export {accountRouter};