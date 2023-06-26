import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <React.StrictMode>
        <BrowserRouter basename="/space-tourism-website">
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
