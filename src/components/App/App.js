import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import ProfilePage from '../../sets/ProfilePage/ProfilePage';

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
                        <ProfilePage />
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;