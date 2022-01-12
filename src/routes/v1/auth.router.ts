import express from 'express';
import {login, register} from '../../controllers/auth.controller'

const authRouter = express.Router();

authRouter
    .route('/login')
    .post(login);

authRouter
    .route('/register')
    .post(register)

export {authRouter};