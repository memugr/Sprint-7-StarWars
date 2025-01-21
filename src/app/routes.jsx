import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Navbar from './pages/Navbar.jsx';
import Starships from './pages/Starships.jsx';
import Home from './pages/Home.jsx';

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home /> 
            },
            {
                path: '/starships',
                element: <Starships /> 
            },
            ]
    }
]);

export default router;