import '../styles/App.css'
import Starships from './pages/Starships';
import { StarshipsProvider } from '../context/StarshipsContext';

function App() {
    return (
        <StarshipsProvider>
            <Starships />
        </StarshipsProvider>
    )
}

export default App;
