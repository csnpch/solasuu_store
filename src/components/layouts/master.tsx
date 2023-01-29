import Navbar from '../navbar';
import Sidebar from './../sidebar/index';
import { propsInterface } from './../../interfaces/share/props'


function LayoutMaster(props: propsInterface) {
    
    return <>
        <div className='container-main'>
            <Sidebar />
            <Navbar />
            <main className='container-content overflow-y-auto'>
                {props.children}
            </main>
        </div>
    </>


}

export default LayoutMaster;