"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const user_controller_1 = require("../../controllers/user.controller");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter
    .route('/')
    .get(user_controller_1.getUser);
//# sourceMappingURL=users.route.js.map