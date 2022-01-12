import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";
import dotenv from 'dotenv';

dotenv.config()

export const JwtService = {
    createToken: (accessKey?: string, secretKey?: string) => {
        const payload = {
            access_key: accessKey? accessKey: process.env.ACCESS_KEY,
            nonce: uuidv4()
        };

        const jwtToken = jwt.sign(payload, secretKey? secretKey: process.env.SECRET_KEY);
        return `Bearer ${jwtToken}`;
    },
    getToken: (req) => {
        return req.headers.Authorization ? req.headers.Authorization : JwtService.createToken();
    }
}