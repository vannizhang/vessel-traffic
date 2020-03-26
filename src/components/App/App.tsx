import * as React from 'react';

import {
    MapView,
    ShipTrafficLayer
} from '../';

import AppConfig from '../../AppConfig';

const App:React.FC = ()=>{

    return (
        <>
            <MapView 
                webmapId={AppConfig.WebMapID}
            >
                <ShipTrafficLayer />
            </MapView>
        </>
    );
};

export default App;