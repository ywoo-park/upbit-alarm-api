"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketService = void 0;
const apiTemplate_1 = require("../utils/apiTemplate");
const jwt_service_1 = require("./jwt.service");
const paths_1 = require("../config/paths");
exports.MarketService = {
    getCodes: () => {
        const token = jwt_service_1.JwtService.createToken();
        return (0, apiTemplate_1.call)(token, paths_1.paths.MARKET);
    }
};
//# sourceMappingURL=market.service.js.map