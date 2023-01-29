import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ScrollContainer } from 'react-indiana-drag-scroll';
import 'react-indiana-drag-scroll/dist/style.css'

// Store
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../store/productSlice";
import { productInterface } from '../../interfaces/product';
import colors from './../../utils/helpers/colors';

// Services
import productService from "../../services/api/product";

// Components
import LayoutMaster from "../../components/layouts/master";
import CardRecommended from '../../components/product/card_recommended';
import CardProduct from '../../components/product/card';



function Home() {

    const products = useSelector((state: RootState) => state.products.value);
    const amountProductsRecommended = 6;
    const dispatch = useDispatch();
    const bgColor = colors.shareColors;
    
    const { categorySlug } = useParams();
    

    async function fetchProduct() {
        await productService
            .find()
            .then((res) => {
                dispatch(setProducts(res.data.data));
            })
            .catch((err) => console.log(err.message));
    }

    
    // onCategoryPathUpdate 
    useEffect(() => {
        (async () => {
            await fetchProduct();
        })();
    }, [categorySlug]);


    
    return (
        <div className={`App`}>
            <LayoutMaster>
                <div className="wh-full px-8 py-6">
                    <div className={`
                        wh-full  overflow-x-hidden
                        ${!categorySlug && 'grid grid-rows-[320px_1fr]'} 
                    `}>
                        {!categorySlug &&
                            <ScrollContainer 
                                className='wh-full grid grid-flow-col gap-x-6 overflow-x-scroll pb-10 duration-500'
                                onScroll={() => {}}
                            > 
                                {
                                    products.map((item, index) => {
                                        if (index < amountProductsRecommended) { 
                                            return (
                                                <CardRecommended key={index} bgColor={bgColor[index]} productItem={item} />
                                            )
                                        }
                                    })
                                }
                            </ScrollContainer>
                        }

                        <div className={`wh-full pb-20`}>
                            
                            {
                                !categorySlug &&
                                <p className="text-indigio-600">Products {JSON.stringify(categorySlug)}</p>
                            }

                            <div 
                                className={`
                                    mt-4 wh-full pr-8 grid 
                                    grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
                                    gap-2 lg:gap-4 xl:gap-6 2xl:gap-10
                                `}
                            >
                                {
                                    products.map((item, index) => {
                                        if (index > amountProductsRecommended && !categorySlug) {
                                            return (
                                                <CardProduct key={index} productItem={item} />
                                            )
                                        } else if (item.category.slug === categorySlug) {
                                            return (
                                                <CardProduct key={index} productItem={item} />
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </LayoutMaster>
        </div>
    );

}

export default Home;
