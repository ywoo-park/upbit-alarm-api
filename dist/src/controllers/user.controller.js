"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const jwt_service_1 = require("../services/jwt.service");
const getUser = (req, res) => {
    const token = jwt_service_1.JwtService.createToken();
    res.send(token);
};
exports.getUser = getUser;
//# sourceMappingURL=user.controller.js.map