import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import CategoryPage from '../../sets/CategoryPage/CategoryPage';
import CreateCoursPage from '../../sets/CreateCoursPage/CreateCoursPage';

function App() {
    return (
        <div className="app">
            <Routes>
                <Route
                    path="/"
                    element={(
                        <HomePage />
                    )} />

                <Route path="/Categorie"
                    element={(
                        <CategoryPage />
                    )}
                />

                <Route path="/Creeruncours"
                    element={(
                        <CreateCoursPage />
                    )}
                />

            </Routes>
        </div>
    );
}

export default App;