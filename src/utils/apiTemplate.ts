import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const call = async (token: string, path: string) => {
    const res = await axios.get(`${process.env.UPBIT_API}${path}`, {headers: {'Authorization': token}});
    return res.data;
}

export {call}