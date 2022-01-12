import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config()

const call = async (token: string, path: string, ...params) => {
    const url = new URL(`${process.env.UPBIT_API}${path}`);
    if (params) {
        params.forEach(p => url.searchParams.set(p.key, p.value))
    }
    const res = await axios.get(url.toString(), {headers: {'Authorization': token}});
    return res.data;
}

export {call}