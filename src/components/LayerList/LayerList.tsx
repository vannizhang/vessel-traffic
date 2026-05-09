/* Copyright 2026 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { DEFAULT_TEXT_COLOR } from '../../constants/UI';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    isNauticalReferenceLayerVisible: boolean;
    isNauticalBoundariesInVisibleRange: boolean;
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
    isNauticalBoundariesInVisibleRange,
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

                    <span style={{
                        fontSize: '.9375rem',
                        lineHeight: 1.5,
                        fontWeight: 700
                    }}>{sublayer}</span>

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
                borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                pointerEvents:'initial'
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
                    pointerEvents: !isNauticalBoundariesInVisibleRange ? 'none' : 'initial',
                    opacity: !isNauticalBoundariesInVisibleRange ? .5 : 1
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