import {JwtService} from "../services/jwt.service";
import {AuthService} from "../services/auth.service";

const login = (req: any, res: any) => {
    const token = JwtService.createToken();
    AuthService.loginByToken();
    res.send(token);
}

const register = (req: any, res: any) => {
    const token = JwtService.createToken();
    AuthService.register();
    res.send(token);
}

export {login, register}