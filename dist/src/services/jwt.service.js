"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtService = void 0;
const tslib_1 = require("tslib");
const jsonwebtoken_1 = (0, tslib_1.__importDefault)(require("jsonwebtoken"));
const uuid_1 = require("uuid");
const dotenv_1 = (0, tslib_1.__importDefault)(require("dotenv"));
dotenv_1.default.config();
exports.JwtService = {
    createToken: () => {
        const payload = {
            access_key: process.env.ACCESS_KEY,
            nonce: (0, uuid_1.v4)()
        };
        const jwtToken = jsonwebtoken_1.default.sign(payload, process.env.SECRET_KEY);
        return `Bearer ${jwtToken}`;
    }
};
//# sourceMappingURL=jwt.service.js.map