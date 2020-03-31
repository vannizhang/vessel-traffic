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
                'padding': '1rem 1.5rem',
                'background': 'rgba(0,0,0,.8)',
                'color': '#efefef',
                'boxShadow': '0 1px 2px rgba(0, 0, 0, 0.3)',
                'boxSizing': 'border-box'
            }}>
                <div>
                    <h4>U.S. Marine Vessel Traffic</h4>
                </div>
                <LayerList />
            </div>

            <div style={{
                'position': 'absolute',
                'bottom': '30px',
                'left': '0',
                'right': '0',
                'display': 'flex',
                'justifyContent': 'center',
                // 'pointerEvents': 'none'
            }}>
                <div id='timeSliderDiv'
                    style={{
                        'width': '1000px'
                    }}
                ></div>
            </div>

        </>
    );
};

export default App;