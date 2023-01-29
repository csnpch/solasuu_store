import axios, { AxiosRequestConfig, AxiosPromise } from 'axios';
import config from '../../config';

const storeAPI = config.Store_API; 


const find = async () => {
    return await axios.get(`${storeAPI}/categories`)
}



const categoryService = {
    find,
}

export default categoryService;