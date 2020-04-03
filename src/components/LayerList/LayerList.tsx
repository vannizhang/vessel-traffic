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
                        'padding': '.25rem .75rem',
                        'color': sublayer === visibleSubLayer ? '#fff' : 'rgba(255,255,255,.65)',
                        'borderLeft': `3px solid ${sublayer === visibleSubLayer ? fillColor : 'rgba(255,255,255,.5)'}`,
                        'cursor': 'pointer',
                        'boxSizing': 'border-box',
                        'background': sublayer === visibleSubLayer ? 'rgba(255,255,255,.2)' : 'rgba(255,255,255,.1)'
                    }}
                    onClick={setVisibleSubLayer.bind(this, sublayer)}
                >
                    <div>
                        <span className='font-size--1 avenir-demi'>{sublayer}</span>
                    </div>
                    
                    {/* {
                        sublayer === visibleSubLayer ? (
                            <div className='leader-quarter trailer-quarter'>
                                <span className='font-size--3'>Maybe a short description like Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                            </div>
                        ) : null
                    } */}
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