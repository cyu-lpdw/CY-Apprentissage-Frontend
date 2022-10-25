import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import ProfilPage from '../../sets/ProfilPage/ProfilPage';

function App () {
    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={(
                        <HomePage />
                    )}
                />
                <Route
                    path="/profil"
                    element={(
                        <ProfilPage />
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;