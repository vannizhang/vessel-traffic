import * as React from 'react';

import {
    MapView
} from '../';

import AppConfig from '../../AppConfig';

const App:React.FC = ()=>{

    return (
        <>
            <MapView 
                webmapId={AppConfig.WebMapID}
            />
        </>
    );
};

export default App;