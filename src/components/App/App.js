import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import SignInPage from '../../sets/SignInPage/SignInPage';
import SignUpPage from '../../sets/SignUpPage/SignUpPage';
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
                    path="/connexion"
                    element={(
                        <SignInPage />
                    )}
                />
                <Route
                    path="/inscription"
                    element={(
                        <SignUpPage />
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