"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const upbitSdk_1 = require("../utils/upbitSdk");
const jwt_service_1 = require("./jwt.service");
const test = () => {
    const token = (0, jwt_service_1.createToken)();
    return (0, upbitSdk_1.testApi)(token);
};
exports.test = test;
//# sourceMappingURL=sample.service.js.map