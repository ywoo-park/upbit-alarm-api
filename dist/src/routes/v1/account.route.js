"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accountRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const account_controller_1 = require("../../controllers/account.controller");
const accountRouter = express_1.default.Router();
exports.accountRouter = accountRouter;
accountRouter
    .route('/')
    .get(account_controller_1.getAccounts);
//# sourceMappingURL=account.route.js.map