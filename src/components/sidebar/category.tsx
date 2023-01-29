import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import { CategoryInterface } from '../../interfaces/category';
import categoryService from '../../services/api/category';
import colors from './../../utils/helpers/colors';
import { moveElementArr } from '../../utils/helpers/functions';

import {
    IoIosArrowDown
} from 'react-icons/io'


var colorCategorys = colors.categorys;


function Category() {

    const [categorys, setCategorys] = useState<CategoryInterface[]>([]);
    const [statusShowMore, setStatusShowMore] = useState<boolean>(false);
    const { categorySlug } = useParams<string>();


    async function fetchCategorys() {
        await categoryService.find()
            .then(async (res) => {
                setCategorys([
                    { products: [], _id: '', name: 'Products', slug: '', }, 
                    ...res.data.data
                ])
                
                // Config navbar
                colorCategorys = await colors.generateRepeatColor(colors.categorys, res.data.data.length + 1);
                setStatusShowMore(res.data.data.length > 5);    

            })
            .catch((err) => console.log('Error', err.message) )
    }


    async function filterCategory() {
        let indexMove = categorys.findIndex(item => item.slug === categorySlug);
        if (indexMove < 5) return;
        console.log(5)
        await moveElementArr(categorys, indexMove, 4);
    }

    // Fetch categorys
    useEffect(() => {

        (async () => {
            await fetchCategorys();
        })()
        
    }, [])


    // For check selected category
    useEffect(() => {
        filterCategory();
    }, [!statusShowMore])


    return <>
        <ul className={`w-full flex flex-col gap-y-1 duration-200 overflow-y-auto `}>
        {
            categorys.map((item, index) => {
                if ((statusShowMore && index < 5) || !statusShowMore) 
                    return (
                        <li key={index}>
                            <motion.div
                                initial={{ opacity: 0, marginLeft: '1rem' }}
                                animate={{ opacity: 1, marginLeft: '0rem' }}
                                transition={{ duration: 0.3 }}
                            >
                                <div 
                                    className={`
                                        group w-full cursor-pointer rounded-lg duration-200
                                    `}
                                >
                                    <Link to={`/${item.slug}`}>
                                        <div className={`
                                            relative flex gap-x-3 items-center first-letter:uppercase text-lg font-light
                                            duration-200 p-2
                                        `}>
                                            
                                            <div className={`
                                                -ml-2 h-8 rounded-full duration-200
                                                ${
                                                    categorySlug === item.slug || (!categorySlug && index === 0 )
                                                    ? 'w-40 opacity-80' 
                                                    : 'w-8 opacity-50'
                                                }
                                            `}
                                                style={{backgroundColor: colorCategorys[index]}} 
                                            />
                                            <span className={`
                                                text-gray-900 absolute left-1.5 duration-200 first-letter:uppercase tracking-wide
                                                ${
                                                    categorySlug === item.slug || (!categorySlug && index === 0 )
                                                    ? 'underline left-3 text-[1.2rem]' 
                                                    : 'group-hover:left-3'
                                                }
                                            `}>
                                                {item.name}
                                            </span>
                                        
                                        </div>
                                    </Link> 
                                </div>
                            </motion.div>
                        </li>
                    )
            })
        }
        {
            categorys.length > 5 && 
            <button
                onClick={() => {
                    setStatusShowMore(!statusShowMore);
                    filterCategory();
                }}
                className={`
                    text-[0.78rem] text-center text-black/60 first-letter:uppercase 
                    mt-2 underline cursor-pointer duration-200
                    hover:text-purple-700 -ml-2 mb-10
                `}>
                <div className='center gap-x-2'>
                    <IoIosArrowDown className={`duration-300 ${!statusShowMore && '-rotate-180'}`} />
                    <span>{ statusShowMore ? 'show more' : 'show less' }</span>
                </div> 
            </button>
        }
        </ul>
    </>

}

export default Category;