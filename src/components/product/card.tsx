import { useState } from 'react';
import { productInterface } from './../../interfaces/product';


type props = {
    productItem: productInterface, 
}


function productCard({ productItem }: props) {
    

    return (
        <>
    
            <div className='
                card-product flex flex-col text-sm gap-y-2 p-4 shadow-md rounded-lg cursor-pointer hover:shadow-xl duration-300
                transform hover:text-blue-600 max-h-[320px]
            '> 
                <img 
                    className='wh-full h-[200px] select-none'
                    src="https://i-shop.link/assets/images/no-image.png" alt="no-image" 
                />
                <div className='wh-full flex flex-col justify-between p-2'>
                    <p className='text-ellipsis overflow-hidden flex flex-wrap h-10'>
                        {productItem.title}
                    </p>
                    <div className='w-full text-right text-red-700'>
                        ${productItem.price}
                    </div>
                </div>
            </div>

        </>
    )

}


export default productCard;