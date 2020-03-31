import * as React from 'react';

import {
    MapView,
    ShipTrafficLayer,
    LayerList,
    TimeSlider
} from '../';

import AppConfig from '../../AppConfig';

// import {
//     ShipTrafficLayersData
// } from '../ShipTrafficLayer/data';

const App:React.FC = ()=>{

    return (
        <>
            <MapView 
                webmapId={AppConfig.WebMapID}
            >
                <ShipTrafficLayer />

                <TimeSlider
                />
            </MapView>

            <div style={{
                'position': 'absolute',
                'top': '1rem',
                'right': '1rem',
                // 'background': '#fff'
            }}>
                
                <LayerList />
            </div>

            <div id='timeSliderDiv'
                style={{
                    'position': 'absolute',
                    'bottom': '40px',
                    'left': '20px',
                    'width': '1000px'
                }}
            ></div>
        </>
    );
};

export default App;