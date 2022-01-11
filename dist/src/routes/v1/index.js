"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const users_route_1 = require("./users.route");
const indexRouter = express_1.default.Router();
exports.indexRouter = indexRouter;
const defaultRoutes = [
    {
        path: '/users',
        route: users_route_1.userRouter,
    }
];
defaultRoutes.forEach((route) => {
    indexRouter.use(route.path, route.route);
});
//# sourceMappingURL=index.js.map