import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './rootLayout.jsx';
import Starships from './pages/Starships.jsx';
import Home from './pages/Home.jsx';
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
        ]
    }
]);

export default router;