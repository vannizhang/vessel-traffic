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
                        'width': '250px',
                        'padding': '.5rem',
                        'background': sublayer === visibleSubLayer ? '#000' : '#efefef',
                        'color': sublayer === visibleSubLayer ? '#fff' : '#333',
                        'borderLeft': `5px solid ${fillColor}`,
                        'cursor': 'pointer',
                        'boxSizing': 'border-box'
                    }}
                    onClick={setVisibleSubLayer.bind(this, sublayer)}
                >
                    <span className='font-size--2'>{sublayer}</span>
                </div>
            );

        });

        return list;

    };

    return (
        <div
            // style={{
            //     'display': 'flex'
            // }}
        >
            { getList() }
        </div>
    );
};

export default LayerList;