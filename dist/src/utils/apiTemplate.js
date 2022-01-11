"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.call = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
const call = (token, path) => (0, tslib_1.__awaiter)(void 0, void 0, void 0, function* () {
    const res = yield axios_1.default.get(`${process.env.UPBIT_API}${path}`, { headers: { 'Authorization': token } });
    return res.data;
});
exports.call = call;
//# sourceMappingURL=apiTemplate.js.map