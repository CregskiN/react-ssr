import axios from 'axios';
import { Request } from 'express';

import config from '../../config/config';

const createInstance = (req: Request) => {
    return axios.create({
        baseURL: 'http://localhost:7001/ssr',
        headers: {
            cookie: req.get('cookie') || ''
        },
        params: {
            secret: config.secret
        }
    })
}
export default createInstance;