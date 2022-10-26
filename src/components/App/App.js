import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import SignInPage from '../../sets/SignInPage/SignInPage';
import SignUpPage from '../../sets/SignUpPage/SignUpPage';
import ProfilePage from '../../sets/ProfilePage/ProfilePage';
import AboutUsPage from '../../sets/AboutUsPage/AboutUsPage';
import GeneralConditionsPage from '../../sets/GeneralConditionsPage/GeneralConditionsPage';
import LegalNoticesPage from '../../sets/LegalNoticesPage/LegalNoticesPage';
import ContactPage from '../../sets/ContactPage/ContactPage';

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
                <Route
                    path="/a-propos"
                    element={(
                        <AboutUsPage />
                    )}
                />
                <Route
                    path="/conditions-generales"
                    element={(
                        <GeneralConditionsPage />
                    )}
                />
                <Route
                    path="/mentions-legales"
                    element={(
                        <LegalNoticesPage />
                    )}
                />
                <Route
                    path="/contact"
                    element={(
                        <ContactPage />
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;