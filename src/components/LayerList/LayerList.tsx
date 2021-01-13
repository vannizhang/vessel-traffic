import React from 'react';
import { DEFAULT_TEXT_COLOR } from '../../constants/UI';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    isNauticalReferenceLayerVisible: boolean;
    onChange: (val: ShipTrafficSubLayerName)=>void;
    nauticalReferenceLayerOnToggle: ()=>void;
}

const SublayerNames: ShipTrafficSubLayerName[] = [
    'Cargo', 
    'Fishing', 
    'Military', 
    'Passenger', 
    'Pleasure', 
    'Tanker', 
    'Tow', 
    'Other'
];

const LayerList:React.FC<Props> = ({
    visibleSubLayer,
    isNauticalReferenceLayerVisible,
    onChange,
    nauticalReferenceLayerOnToggle
})=>{

    const getList = ()=>{

        const layerList = SublayerNames.map((sublayer:ShipTrafficSubLayerName) =>{

            const color = ShipTrafficSubLayerStyles[sublayer]["text-color"];

            return (
                <div 
                    key={`layer-list-${sublayer}`}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        // justifyContent: 'flex-end',
                        color: sublayer === visibleSubLayer ? color : DEFAULT_TEXT_COLOR,
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        fontSize: 14
                    }}
                    onClick={onChange.bind(this, sublayer)}
                >
                    <div
                        style={{
                            borderRadius: '50%',
                            height: 6,
                            width: 6,
                            background: sublayer === visibleSubLayer ? color : 'transparent',
                            marginRight: '.5rem'
                        }}
                    ></div>

                    <span className='font-size--1 avenir-demi'>{sublayer}</span>

                </div>
            );

        });

        return (
            <div>
                { layerList }
            </div>
        )

    };

    return (
        <div
            style={{
                marginLeft: '1rem',
                paddingLeft: '2rem',
                userSelect: 'none',
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)'
            }}
        >
            { getList() }

            <div
                style={{
                    borderTop: `solid 1px rgba(255, 255, 255, 0.3)`,
                    color: DEFAULT_TEXT_COLOR,
                    paddingTop: '.5rem',
                    marginTop: '.75rem',
                    fontSize: 14,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                }}
                onClick={nauticalReferenceLayerOnToggle}
            >

                <div
                    style={{
                        borderRadius: '50%',
                        height: 6,
                        width: 6,
                        background: isNauticalReferenceLayerVisible? DEFAULT_TEXT_COLOR : 'transparent',
                        marginRight: '.5rem'
                    }}
                ></div>

                <span className='avenir-demi'>NAUTICAL BOUNDARIES</span>
            </div>
        </div>
    );
};

export default LayerList;