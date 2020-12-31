import React from 'react';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    onChange: (val: ShipTrafficSubLayerName)=>void;
}

const SublayerNames: ShipTrafficSubLayerName[] = [
    'Cargo', 
    'Fishing', 
    'Military', 
    'Passenger', 
    'Pleasure', 
    'Tanker', 
    'Tow', 
    // 'Other'
];

const LayerList:React.FC<Props> = ({
    visibleSubLayer,
    onChange
})=>{

    const getList = ()=>{

        return SublayerNames.map((sublayer:ShipTrafficSubLayerName) =>{

            const color = ShipTrafficSubLayerStyles[sublayer]["line-color"];

            return (
                <div 
                    key={`layer-list-${sublayer}`}
                    style={{
                        color: sublayer === visibleSubLayer ? color : 'rgba(255,255,255,.6)',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        fontSize: 14
                    }}
                    onClick={onChange.bind(this, sublayer)}
                >
                    <span className='font-size--1 avenir-demi'>{sublayer}</span>

                </div>
            );

        });

    };

    return (
        <div
            style={{
                textAlign: 'right',
                marginLeft: '2rem'
            }}
        >
            { getList() }
        </div>
    );
};

export default LayerList;