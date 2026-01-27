import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Accueil from './pages/Accueil';
import SideCart from './components/SideCart';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil />} />
            </Routes>

            <SideCart />
        </BrowserRouter>
    )
}

export default App