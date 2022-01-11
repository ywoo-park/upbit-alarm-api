"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = (0, tslib_1.__importDefault)(require("express"));
const sample_controller_1 = require("../../controllers/sample.controller");
const sampleRouter = express_1.default.Router();
exports.sampleRouter = sampleRouter;
sampleRouter
    .route('/')
    .get(sample_controller_1.getData);
//# sourceMappingURL=sample.route.js.map