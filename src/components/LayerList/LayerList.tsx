import * as React from 'react';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

import {
    AppContext
} from '../../contexts/AppContextProvider';

const LayerList:React.FC = ()=>{

    const { visibleSubLayer, setVisibleSubLayer } = React.useContext(AppContext);

    const getList = ()=>{

        const list = [
            'Cargo', 
            'Fishing', 
            'Military', 
            'Passenger', 
            'Pleasure', 
            'Tanker', 
            'Tow', 
            'Other'
        ].map((sublayer:ShipTrafficSubLayerName, index) =>{

            const fillColor = ShipTrafficSubLayerStyles[sublayer]["line-color"];

            return (
                <div 
                    key={`layer-list-${index}`}
                    style={{
                        // 'width': '150px',
                        'padding': '.25rem .45rem',
                        // 'margin': '.25rem',
                        // 'background': "#fff",
                        'color': sublayer === visibleSubLayer ? '#fff' : 'rgba(255,255,255,.65)',
                        'borderBottom': `3px solid ${sublayer === visibleSubLayer ? fillColor : 'rgba(255,255,255,.5)'}`,
                        'cursor': 'pointer',
                        'boxSizing': 'border-box',
                        // 'opacity': sublayer === visibleSubLayer ? 1 : .75
                    }}
                    onClick={setVisibleSubLayer.bind(this, sublayer)}
                >
                    <span className='font-size--3'>{sublayer}</span>
                </div>
            );

        });

        return list;

    };

    return (
        <div
            style={{
                'display': 'flex',
                // 'flexWrap': 'wrap',
                // 'width': '300px'
            }}
        >
            { getList() }
        </div>
    );
};

export default LayerList;