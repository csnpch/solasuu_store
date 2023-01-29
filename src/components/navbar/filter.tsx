import { useState } from 'react';
import Ripples from 'react-ripples'

function Filter() {

    const [statusSwitch, setStatusSwitch] = useState<boolean>(true)


    return <div className="h-full">
        <label 
            htmlFor="Toggle3" 
            className="
                h-full select-none inline-flex items-center rounded-md cursor-pointer dark:text-gray-800
            ">
                <input id="Toggle3" type="checkbox" className="hidden peer" />
                <Ripples 
                    onClick={() => setTimeout(() => { setStatusSwitch(true) }, 200)}
                    className={`
                        px-8 h-full rounded-l-md 
                        duration-300 center
                    ${
                        statusSwitch 
                        ? 'bg-black text-white' 
                        : 'bg-stone-100 text-gray-400'
                    }
                `}>
                    Men
                </Ripples>
                <Ripples 
                    onClick={() => setTimeout(() => { setStatusSwitch(false) }, 200)}
                    className={`
                        px-8 h-full rounded-r-md
                    ${
                        !statusSwitch 
                        ? 'bg-black text-white' 
                        : 'bg-stone-100 text-gray-400'
                    }
                    duration-300 center
                `}>
                    Women
                </Ripples>
        </label>
    </div>
}

export default Filter;