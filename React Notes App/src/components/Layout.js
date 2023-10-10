import Nav from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className="App">
            <Nav/>
            <Header/>
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
