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
import { BACKGROUND_COLOR, NAUTICAL_LAYER_BACKGROUND } from '../../constants/UI';
import { NauticalBoundariesLayerQueryResult } from '../NauticalBoundariesLayer/NauticalBoundariesLayer';

import {
    InfoWindowConatiner, InfoWindowContentWrapper, InfoBlock, TitleText, SubtitleText, CloseBtn
} from '../ShipInfoWindow/ShipInfoWindow'

type Props = {
    data: NauticalBoundariesLayerQueryResult
    onClose: ()=>void;
}

const NauticalLayerInfoWindow:React.FC<Props> = ({
    data,
    onClose
}) => {

    const getSubtitle = ()=>{

        const { 
            layerName,
            graphic
        } = data;

        const { attributes } = graphic;

        // console.log(graphic)

        if(layerName === 'shipping lane'){
            return attributes['THEMELAYER'] 
        } 
        
        if(layerName === 'anchorage area'){
            return `${attributes['name']}, ${attributes['location']}`
        }

        if(layerName === 'maritime limit'){
            return attributes['Type']
        }

        return ''
    }

    return (
        <InfoWindowConatiner>
            <InfoWindowContentWrapper
                background={NAUTICAL_LAYER_BACKGROUND}
            >
                <InfoBlock
                    style={{
                        textTransform: 'uppercase'
                    }}
                >
                    <TitleText>
                        { data.layerName }
                    </TitleText>

                    <SubtitleText>
                        { getSubtitle() }
                    </SubtitleText>
                </InfoBlock>

                <CloseBtn 
                    onClose={onClose}
                />

            </InfoWindowContentWrapper>
        </InfoWindowConatiner>
    )
}

export default NauticalLayerInfoWindow
