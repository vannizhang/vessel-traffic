import * as React from 'react';

import {
    MapView,
    ShipTrafficLayer,
    LayerList
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

            <div style={{
                'position': 'absolute',
                'top': '1rem',
                'right': '1rem',
                'background': '#fff'
            }}>
                <LayerList />
            </div>
        </>
    );
};

export default App;