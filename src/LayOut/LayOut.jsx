import { Outlet } from 'react-router-dom'
import NavBar2 from '../components/Shared/NavBar2';
import Footer from '../components/Shared/Footer';
// import NavBar3 from '../components/Shared/NavBar3';



const LayOut = () => {
    return (
        <div>
            <NavBar2></NavBar2>
            {/* <NavBar3></NavBar3> */}
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
    );
};

export default LayOut;