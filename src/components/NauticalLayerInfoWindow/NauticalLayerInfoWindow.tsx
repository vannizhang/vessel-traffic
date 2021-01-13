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
            return attributes['LEGAL_AUTH']
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
