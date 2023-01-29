import { useState, useCallback, useEffect } from 'react';
import useDebounce from './../../utils/hooks/debounce'

import Search from "./search";
import Profile from './profile';
import ManageSite from './manage';
import Filter from './filter';

type Callback = (val: any) => any;

function Navbar() {

    const [valueSearch, setValueSearch] = useState<string>('');

    const debouncedSearch = useDebounce(valueSearch, 1000);

    const receiveValueSearch = (value: string) => {
        setValueSearch(value);
    };

    const onSearch = () => {
        console.log('request search', valueSearch)
    }


    useEffect(() => {
        onSearch();
    }, [debouncedSearch])

    
    return (
        <div className={`container-navbar`}>
            <div className={`
                h-full w-full flex flex-center
            `}>
                <div className={`w-11/12 h-12 mx-auto flex justify-between items-center`}>
                    <Filter />
                    <Search 
                        valueSearch={valueSearch} 
                        receiveValueSearch={receiveValueSearch}
                    />
                    <div className='h-full flex gap-x-4'>
                        <Profile />
                        <ManageSite />
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Navbar;