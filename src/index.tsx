import './styles/index.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

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