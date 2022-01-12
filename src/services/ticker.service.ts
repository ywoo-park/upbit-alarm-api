import {call} from "../utils/apiTemplate";
import {JwtService} from "./jwt.service";
import {paths} from "../config/paths";

export const TickerService = {
    getTicker: (code: string) => {
        const token = JwtService.createToken();
        return call(token, paths.TICKER, {key: 'markets', value: code});
    }
}