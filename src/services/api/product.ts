import axios, { AxiosRequestConfig, AxiosPromise, AxiosStatic } from 'axios';
import config from '../../config';
import { paginationInterface } from '../../interfaces/share/pagination';
import { productInterface } from '../../interfaces/product';


const storeAPI = config.Store_API; 


const find = async (pagination?: paginationInterface) => {
    if (pagination) {
        return await axios.get(
            `${storeAPI}/products?limit=${pagination.limit}&page=${pagination.page}`
        );
    }
    return await axios.get(`${storeAPI}/products`);
}


const findOneBySlug = async(slug: string) => {
    return await axios.get(`${storeAPI}/products/${slug}`);
}


const create = async (data: productInterface) => {
    return await axios.post(`${storeAPI}/products`, {
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category,
    }, {
        headers: {
            'Content-type': 'multipart/form-data',
        }
    });
}


const update = async (slug: string, data: productInterface) => {
    return await axios.put(`${storeAPI}/products/${slug}`, {
        title: data.title,
        price: data.price,
        description: data.description,
        category: data.category
    }, {
        headers: {
            'Content-type': 'multipart/form-data'
        }
    });
}
    

const remove = async(slug: string) => {
    return await axios.delete(`${storeAPI}/products/${slug}`);
}




const productService = {
    find,
    findOneBySlug,
    create,
    update,
    remove
}

// export default {
//     find,
//     findOneBySlug,
//     create,
//     update,
//     remove
// }
export default productService;