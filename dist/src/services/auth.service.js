"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const database_1 = require("../database");
exports.AuthService = {
    loginByToken: () => {
        (0, database_1.select)();
    },
    register: () => {
        (0, database_1.create)();
    }
};
//# sourceMappingURL=auth.service.js.map