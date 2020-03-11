import axios from 'axios';
import config from '../../config/config';

const createInstance = () => {
    return axios.create({
        baseURL: '/',
        params: {
            secret: config.secret
        }
    })
}

export default createInstance;