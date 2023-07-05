import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';

// render the app to the root element
ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    // enable strict mode
    <React.StrictMode>
        {/* use react router for routing */}
        <BrowserRouter basename="/space-tourism-website">
            {/* render the main app */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
