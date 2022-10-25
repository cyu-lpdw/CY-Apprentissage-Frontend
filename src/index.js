import '../src/styles/reset.scss';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './components/App/App';

const rootReactElement = (
    <BrowserRouter>
        <Routes>
            <Route path="/*" element={<App />} />
        </Routes>
    </BrowserRouter>
);

const root = createRoot(document.getElementById('root'));

root.render(rootReactElement);