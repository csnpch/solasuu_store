import { productInterface } from './../../interfaces/product';

type Props = {
    bgColor: string,
    productItem: productInterface
}

function CardRecommended({ bgColor, productItem }: Props) {
    
    return (
        <div 
            className={`card-recommended relative h-full w-[16rem] rounded-xl shadow-md hover:shadow-xl overflow-hidden`}
        >
            <div 
                className={`wh-full absolute top-0 left-0 z-0`}
                style={{backgroundImage: `radial-gradient(${bgColor} 40%, #ffffff)`}}
            />
            <div
                className={`
                    wh-full relative center top-0 left-0 z-10 select-none
                `}
            >
                <img 
                    className='h-[8rem] transform hover:scale-110 duration-200 active:scale-125' 
                    src='https://sv1.picz.in.th/images/2023/01/29/LhvTM8.th.png' alt="No-Image" 
                />
                <div className='absolute flex items-center gap-x-2 top-6 rounded-r-lg left-0 px-2 py-1 bg-white'>
                    <span className='relative text-xs mt-0.5 text-gray-400 line-through'>
                        ${productItem.price + Math.floor(Math.random() * 4 + 16)}
                    </span>
                    <span className='text-sm tracking-wide'>${productItem.price}</span>
                </div>
            </div>
        </div>
    );

}


export default CardRecommended;
