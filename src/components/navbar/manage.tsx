import Ripples from 'react-ripples'
import {
    FiSettings
} from 'react-icons/fi'

function ManageSite() {
    
    return <>
        <Ripples className="bg-stone-100 h-full px-4 flex flex-center rounded-xl hover:bg-stone-200 cursor-pointer duration-300">
            <FiSettings className='mx-auto' />
        </Ripples>
    </>

}

export default ManageSite;