import {create, select} from "../database";

export const AuthService = {
    loginByToken: () => {
        select();
    },
    register: () => {
        create();
    }
}