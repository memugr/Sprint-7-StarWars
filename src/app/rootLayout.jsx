import { Outlet } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default RootLayout;