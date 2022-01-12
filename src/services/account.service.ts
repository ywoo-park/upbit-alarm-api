import {call} from "../utils/apiTemplate";
import {JwtService} from "./jwt.service";
import {paths} from "../config/paths";

export const AccountService = {
    getAccounts: (req) => {
        const token = JwtService.getToken(req);
        return call(token, paths.ACCOUNT);
    }
}