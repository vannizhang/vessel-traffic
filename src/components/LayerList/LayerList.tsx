import * as React from 'react';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

import {
    AppContext
} from '../../contexts/AppContextProvider';

import AppConfig from '../../AppConfig';

import MilitaryIcon from '../../static/Military.png';
import CargoIcon from '../../static/Cargo.png';
import FishingIcon from '../../static/Fishing.png';
import PassengerIcon from '../../static/Passenger.png';
import PleasureIcon from '../../static/Pleasure.png';
import TankerIcon from '../../static/Tanker.png';
import TowIcon from '../../static/Tow.png';

const LayerList:React.FC = ()=>{

    const { visibleSubLayer, setVisibleSubLayer } = React.useContext(AppContext);

    const getIcon = (layerName:ShipTrafficSubLayerName)=>{
        const lookup = {
            'Cargo': CargoIcon, 
            'Fishing': FishingIcon, 
            'Military': MilitaryIcon, 
            'Passenger': PassengerIcon, 
            'Pleasure': PleasureIcon, 
            'Tanker': TankerIcon, 
            'Tow': TowIcon, 
            'Other': ''
        };

        return lookup[layerName];
    }

    const getList = ()=>{

        const list = [
            'Cargo', 
            'Fishing', 
            'Military', 
            'Passenger', 
            'Pleasure', 
            'Tanker', 
            'Tow', 
            // 'Other'
        ].map((sublayer:ShipTrafficSubLayerName, index) =>{

            const fillColor = ShipTrafficSubLayerStyles[sublayer]["line-color"];

            return (
                <div 
                    key={`layer-list-${index}`}
                    style={{
                        // 'width': '150px',
                        'padding': '.25rem .75rem',
                        'color': sublayer === visibleSubLayer ? '#fff' : 'rgba(255,255,255,.65)',
                        'borderLeft': `3px solid ${sublayer === visibleSubLayer ? fillColor : 'rgba(255,255,255,.5)'}`,
                        'cursor': 'pointer',
                        'boxSizing': 'border-box',
                        'background': sublayer === visibleSubLayer ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.1)'
                    }}
                    onClick={setVisibleSubLayer.bind(this, sublayer)}
                >
                    <div
                        style={{
                            'display': 'flex',
                            'justifyItems': 'center'
                        }}
                    >
                        <div
                            style={{
                                'width': '25px',
                                'height': '25px',
                                'background': `url(${getIcon(sublayer)}) center center no-repeat`,
                                'backgroundSize': 'cover',
                                'filter': 'invert(1)',
                                'marginRight': '.4rem'
                            }}
                        ></div>

                        <span className='font-size--1 avenir-demi'>{sublayer}</span>
                    </div>

                    {
                        sublayer === visibleSubLayer && 
                        AppConfig['Vessel_Descriptions'][sublayer] ? (
                            <div className='leader-quarter trailer-quarter'>
                                <span className='font-size--3'>{ AppConfig['Vessel_Descriptions'][sublayer] } </span>
                            </div>
                        ) : null
                    }
                </div>
            );

        });

        return list;

    };

    return (
        <div
            style={{
                // 'display': 'flex',
                // 'flexWrap': 'wrap',
                'width': '100%'
            }}
        >
            { getList() }
        </div>
    );
};

export default LayerList;