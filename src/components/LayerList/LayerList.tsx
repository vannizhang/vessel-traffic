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
                        'padding': '.5rem',
                        'background': sublayer === visibleSubLayer ? '#000' : 'none',
                        'color': sublayer === visibleSubLayer ? '#fff' : '#333',
                        'borderLeft': `5px solid ${fillColor}`,
                        'cursor': 'pointer'
                    }}
                    onClick={setVisibleSubLayer.bind(this, sublayer)}
                >{sublayer}</div>
            );

        });

        return list;

    };

    return (
        <div>{getList()}</div>
    );
};

export default LayerList;