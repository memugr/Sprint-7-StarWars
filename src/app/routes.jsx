import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './rootLayout.jsx';
import Starships from './pages/Starships.jsx';
import Home from './pages/Home.jsx';

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