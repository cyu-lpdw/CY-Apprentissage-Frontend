import './App.scss';

import { Routes, Route } from 'react-router-dom';

import HomePage from '../../sets/HomePage/HomePage';
import CategoryPage from '../../sets/CategoryPage/CategoryPage';

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
            </Routes>
        </div>
    );
}

export default App;