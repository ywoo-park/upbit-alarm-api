"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const jwt_service_1 = require("../services/jwt.service");
const auth_service_1 = require("../services/auth.service");
const login = (req, res) => {
    const token = jwt_service_1.JwtService.createToken();
    auth_service_1.AuthService.loginByToken();
    res.send(token);
};
exports.login = login;
const register = (req, res) => {
    const token = jwt_service_1.JwtService.createToken();
    auth_service_1.AuthService.register();
    res.send(token);
};
exports.register = register;
//# sourceMappingURL=auth.controller.js.map