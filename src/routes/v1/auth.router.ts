import express from 'express';
import {login, register} from '../../controllers/auth.controller'

const authRouter = express.Router();

authRouter
    .route('/login')
    .get(login);

authRouter
    .route('/register')
    .get(register)

export {authRouter};