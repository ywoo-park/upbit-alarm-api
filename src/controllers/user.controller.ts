import {JwtService} from '../services/jwt.service'

const getUser = (req: any, res: any) => {
    const token = JwtService.createToken();
    res.send(token);
}

export {getUser}