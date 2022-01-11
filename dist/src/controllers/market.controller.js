"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCodes = void 0;
const tslib_1 = require("tslib");
const market_service_1 = require("../services/market.service");
const catchAsync_1 = require("../utils/catchAsync");
const getCodes = (0, catchAsync_1.catchAsync)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const r = yield market_service_1.MarketService.getCodes();
    res.send(r);
}));
exports.getCodes = getCodes;
//# sourceMappingURL=market.controller.js.map