import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import {
    App
} from './components';

import {
    AppContextProvider
} from './contexts/AppContextProvider';

const root = createRoot(document.getElementById('root'));

root.render(
    <AppContextProvider>
        <App />
    </AppContextProvider>
);