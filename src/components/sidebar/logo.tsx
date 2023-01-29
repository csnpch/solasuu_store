import { Link } from 'react-router-dom'


function LogoSidebar() {
    return (
        <Link to='/'>
            <div className='relative'>
                
                <p className={`
                    absolute left-0
                    text-3xl 
                    z-20 select-none
                `}>
                    solas'uu
                </p>
                
                {/* Circle behide the logo title */}
                <div className={`
                    absolute w-14 h-14 rounded-full bg-indigo-300/30
                    -top-4 z-10 left-2
                `} />

                {/* Circle behide the logo title */}
                <div className={`
                    absolute w-12 h-12 rounded-full bg-red-300/20
                    -top-0.5 z-10 left-10
                `} />
                
            </div>
        </Link>
    )
}

export default LogoSidebar;