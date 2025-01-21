import '../styles/App.css'
import { AppProvider } from './provider.jsx';
import { StarshipsProvider } from '../context/StarshipsProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './routes.jsx';

function App() {
    return (
        <AppProvider>
            <StarshipsProvider>
                <RouterProvider router={router} />
            </StarshipsProvider>
        </AppProvider>
    )
}

export default App;
