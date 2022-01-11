import express from 'express';
import {userRouter} from './users.route';

const indexRouter = express.Router();

const defaultRoutes = [
  {
    path: '/users',
    route: userRouter,
  }
];

defaultRoutes.forEach((route) => {
  indexRouter.use(route.path, route.route);
});

export {indexRouter}
