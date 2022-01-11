import {call} from "../utils/apiTemplate";
import {JwtService} from "./jwt.service";
import {paths} from "../config/paths";

export const AccountService = {
    getAccounts: () => {
        const token = JwtService.createToken();
        return call(token, paths.ACCOUNT);
    }
}