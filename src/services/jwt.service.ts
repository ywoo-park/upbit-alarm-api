import jwt from "jsonwebtoken";
import {v4 as uuidv4} from "uuid";
import dotenv from 'dotenv';

dotenv.config()

export const JwtService = {
    createToken: () => {
        const payload = {
            access_key: process.env.ACCESS_KEY,
            nonce: uuidv4()
        };

        const jwtToken = jwt.sign(payload, process.env.SECRET_KEY);
        return `Bearer ${jwtToken}`;
    }
}