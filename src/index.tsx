import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {
    App
} from './components';

import {
    AppContextProvider
} from './contexts/AppContextProvider';

ReactDOM.render(
    (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    ), 
    document.getElementById('root')
);