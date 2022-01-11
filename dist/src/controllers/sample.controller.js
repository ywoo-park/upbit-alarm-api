"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const tslib_1 = require("tslib");
const sample_service_1 = require("../services/sample.service");
const catchAsync_1 = require("../utils/catchAsync");
const getData = (0, catchAsync_1.catchAsync)((req, res) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const r = yield (0, sample_service_1.test)();
    res.send(r);
}));
exports.getData = getData;
//# sourceMappingURL=sample.controller.js.map