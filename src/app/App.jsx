import '../styles/App.css';
import { AppProvider } from './provider.jsx';
import { StarshipsProvider } from '../context/StarshipsProvider.jsx';
import { AuthProvider } from '../context/AuthContext.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';

function App() {
    return (
        <AuthProvider>
            <AppProvider>
                <StarshipsProvider>
                    <RouterProvider router={router} />
                </StarshipsProvider>
            </AppProvider>
        </AuthProvider>
    );
}

export default App;

