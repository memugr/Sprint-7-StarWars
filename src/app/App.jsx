import '../styles/App.css'
import Starships from './pages/Starships';
import { AppProvider } from './provider.jsx';
import { StarshipsProvider } from '../context/StarshipsProvider.jsx';

function App() {
    return (
        <AppProvider>
            <StarshipsProvider>
                <Starships />
            </StarshipsProvider>
        </AppProvider>
    )
}

export default App;
