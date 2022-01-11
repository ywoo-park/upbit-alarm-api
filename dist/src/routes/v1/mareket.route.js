"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.marketRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const market_controller_1 = require("../../controllers/market.controller");
const marketRouter = express_1.default.Router();
exports.marketRouter = marketRouter;
marketRouter
    .route('/')
    .get(market_controller_1.getCodes);
//# sourceMappingURL=mareket.route.js.map