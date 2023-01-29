import React from 'react';
import {
    BiSearchAlt
} from 'react-icons/bi';


type Props = {
    valueSearch: string,
    receiveValueSearch: (value: string) => void
}


function Search({
    valueSearch,
    receiveValueSearch
}: Props) {



    const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        receiveValueSearch(event.target.value);
    }


    return <>

        <div className={`
            min-w-[20%] hover:min-w-[26%] bg-stone-100 rounded-lg
            flex items-center gap-x-2 px-4 h-full duration-300 
        `}>
            <BiSearchAlt className='text-gray-500 text-xl -mt-[0.5px]' />
            <input 
                onChange={onSearch}
                value={valueSearch}
                type="text" 
                className={`
                    w-full border-none bg-inherit outline-none 
                    px-2 duration-300 placeholder-gray-500 
                    text-[0.9rem] hover:text-[1rem]
                `} 
                placeholder='Search'
            />
        </div>

    </>

}

export default Search;