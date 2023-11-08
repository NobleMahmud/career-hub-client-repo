import { Outlet, useLocation } from 'react-router-dom'
import NavBar2 from '../components/Shared/NavBar2';
import Footer from '../components/Shared/Footer';
import { useEffect } from 'react';
// import NavBar3 from '../components/Shared/NavBar3';



const LayOut = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            document.title = 'Career-Hub | Home'
        }
        else {
            document.title = `Career-Hub ${location.pathname.replace('/', ' | ')}`
        }
    }, [location.pathname])
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