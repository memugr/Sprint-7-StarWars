import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './rootLayout.jsx';
import Starships from './pages/Starships.jsx';
import HomePage from './pages/HomePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import StarshipDetailsPage from './pages/StarshipDetailsPage.jsx';
import ProtectedRoute from '../components/starship/ProtectedRoute.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
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
                path: '/starships/:name',
                element: (
                    <ProtectedRoute>
                        <StarshipDetailsPage />
                    </ProtectedRoute>
                )
            },
            {
                path: '*',
                element: <ErrorPage />
            },
        ]
    }
]);

export default router;