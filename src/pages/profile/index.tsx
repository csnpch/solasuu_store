import { useState, useEffect } from 'react';
import { productInterface } from '../../interfaces/product';
import productService from '../../services/api/product';


function Product() {
    const [product, setProduct] = useState<productInterface[]>([]);

    
    useEffect(() => {
        getDataProduct();
    }, [])

    
    const getDataProduct = async () => {
        await productService.find()
        .then(res => {
            setProduct(prevState => ([...prevState, res.data]));
        })
        .catch(err => { console.log(err.message) })
    }

    return (
        <></>
    )
}