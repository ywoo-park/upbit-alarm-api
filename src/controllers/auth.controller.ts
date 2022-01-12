import {AuthService} from "../services/auth.service";
import {catchAsync} from "../utils/catchAsync";

const login = catchAsync(async (req, res) => {
    const r = await AuthService.login(req.body);
    res.send(r);
});

const register = catchAsync(async (req, res) => {
    const r = await AuthService.register(req.body);
    res.send(r);
});

export {login, register}