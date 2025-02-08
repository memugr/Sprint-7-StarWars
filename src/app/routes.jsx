import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './rootLayout.jsx';
import Starships from './pages/Starships.jsx';
import Home from './pages/Home.jsx';
import Error from './pages/Error.jsx';
import ProtectedRoute from '../components/starship/ProtectedRoute.jsx';

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
                element: (
                    <ProtectedRoute>
                        <Starships />
                    </ProtectedRoute>
                )
            },
            {
                path: '*',
                element: <Error />
            },
        ]
    }
]);

export default router;