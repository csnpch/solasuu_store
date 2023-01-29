import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from '../../config';

const storeAPI = config.Store_API; 


const refresh = async () => {
    return await axios.get(`${storeAPI}/auth/refresh`)
}



const authService = {
    refresh,
}

export default authService;