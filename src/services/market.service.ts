import {call} from "../utils/apiTemplate";
import {JwtService} from "./jwt.service";
import {paths} from "../config/paths";

export const MarketService = {
    getCodes: () => {
        const token = JwtService.createToken();
        return call(token, paths.MARKET);
    }
}