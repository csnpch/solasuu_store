import Category from './category';
import LogoSidebar from './logo';
import { swal } from './../../utils/helpers/functions'
import { 
    FiLogOut 
} from 'react-icons/fi';


function Sidebar() {

    
    function onLogout() {
        swal.fire({
            title: 'Are you sure to logout?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sure!'
          }).then((result) => {
            if (result.isConfirmed) { }
        })
    }


    return <>
        <div className='container-sidebar px-14 pt-14 pb-6 grid grid-rows-[6rem_1fr] select-none'>
            
            <LogoSidebar />        
            <Category />

            {/* Logout button */}
            <button 
                onClick={onLogout}
                className={`
                    w-full flex flex-col items-center gap-y-3 text-md text-gray-800 rounded-b-xl
                    duration-200 hover:bg-stone-50 hover:shadow-sm transform active:scale-105
                `}
            >
                <div className='w-full h-[0.1rem] bg-gradient-to-r from-slate-700 via-gray-200 to-white' />
                <div className='w-full flex pl-4 pb-2 flex-row flex-start items-center gap-x-2 text-slate-700'>
                    <FiLogOut />
                    <span>Log Out</span>
                </div>
            </button>

        </div>
    </> 

}

export default Sidebar;