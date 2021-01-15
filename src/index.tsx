import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import {
    App
} from './components';

import {
    AppContextProvider
} from './contexts/AppContextProvider';

import {
    setDefaultOptions
} from 'esri-loader';

setDefaultOptions({
    version: '4.18'
})

ReactDOM.render(
    (
        <AppContextProvider>
            <App />
        </AppContextProvider>
    ), 
    document.getElementById('root')
);