import {UserAttributes, UserModel} from "../models/user/user.model";
import {UserRequest} from "../models/user/req/UserRequest";
import {compare, encrypt} from "../utils/encrypt";
import {JwtService} from "./jwt.service";

export const AuthService = {
    login: async (req: UserRequest) => {
        const email = req.email;
        const password = req.password;

        const user = await UserModel.findOne({where: {email: email}});
        if (email !== user.email) {
            return false;
        }

        const hash = user.password;
        return await compare(password, hash);
    },

    register: async (req: UserRequest) => {
        const password = req.password;
        const accessKey = req.accessKey;
        const secretKey = req.secretKey;

        const hash = encrypt(password);
        const token = JwtService.createToken(accessKey, secretKey);

        const user: UserAttributes = {email: req.email, password: hash, token: token}

        return UserModel.create(user).catch(e => console.log(e));
    }
}