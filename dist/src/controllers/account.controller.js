"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAccounts = void 0;
const tslib_1 = require("tslib");
const account_service_1 = require("../services/account.service");
const catchAsync_1 = require("../utils/catchAsync");
const getAccounts = (0, catchAsync_1.catchAsync)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const r = yield account_service_1.AccountService.getAccounts();
    res.send(r);
}));
exports.getAccounts = getAccounts;
//# sourceMappingURL=account.controller.js.map