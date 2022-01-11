"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const auth_controller_1 = require("../../controllers/auth.controller");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
authRouter
    .route('/login')
    .get(auth_controller_1.login);
authRouter
    .route('/register')
    .get(auth_controller_1.register);
//# sourceMappingURL=auth.router.js.map