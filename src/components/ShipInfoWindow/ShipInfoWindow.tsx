import React from 'react'
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';
import { format } from 'date-fns';
import styled from 'styled-components';
import { ShipTrafficSubLayerName, ShipTrafficSubLayerStyles } from '../ShipTrafficLayer/ShipTrafficLayer';
import { DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR } from '../../constants/UI';

const InfoWindowConatiner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    background: linear-gradient(to bottom, rgba(27, 82, 139, 1), rgba(27, 82, 139, .05) 100%);
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    z-index: 5;
`;

const InfoBlock = styled.div`
    position: relative;
    padding: 0 1rem;
    text-align: left;
`;

const TitleText = styled.p`
    font-size: 2.2rem;
    line-height: .8;
    margin-bottom: 0;
`;

const SubtitleText = styled.span`
    font-size: 0.9rem;
    line-height: 1.2;
`;

type Direction = 'N' | 'N/NE' | 'NE' | 'E/NE'| 'E' | 'E/SE' | 'SE'| 'S/SE' | 'S' | 'S/SW'| 'SW' | 'W/SW' | 'W'| 'W/NW'| 'NW'| 'N/NW'

type Props = {
    feature: ShipTrafficFeature;
    visibleSubLayer: ShipTrafficSubLayerName;
    onClose: ()=>void;
}

const DATE_FORMATTER = 'yyyy/MM/dd';

const getDirection = (COG:number):Direction=>{
    return 'N';
}

const ShipInfoWindow:React.FC<Props> = ({
    feature,
    visibleSubLayer,
    onClose
}) => {

    const getContent = ():JSX.Element=>{

        if(!feature){
            return null;
        }

        const {
            attributes
        } = feature;

        const {
            vesselname,
            vesselgroup,
            vesselclass,
            start_date,
            end_date,
            length,
            width,
            draft,
            mean_cog,
            mean_sog,
            mmsi
        } = attributes;

        // console.log(attributes)

        const startTime = start_date ? format(new Date(start_date), DATE_FORMATTER) : '';

        const avgSpeed = mean_sog ? (+mean_sog).toFixed(1) : '0';

        const styleInfo = ShipTrafficSubLayerStyles[visibleSubLayer];

        const vesselInfoSearchUrl = `https://www.google.com/search?q=${vesselname ? vesselname : visibleSubLayer + ' vessel'}+mmsi ${mmsi}`

        return (
            <div
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    padding: '.5rem',
                    color: 'rgba(255,255,255,.8)',
                    textShadow: `0 0 3px ${styleInfo['background-color']}`,
                    background: `linear-gradient(to bottom, ${styleInfo['background-color']}, transparent 100%)`
                }}
            >

                <InfoBlock>
                    <div
                        style={{
                            display: 'flex',
                            // justifyContent: 'center',
                            alignItems: 'center',
                            textTransform:'uppercase'
                        }}
                    >
                        <TitleText
                            className='avenir-light'
                        >{ vesselname }</TitleText>
                        
                        <a
                            href={vesselInfoSearchUrl}
                            target='_BLANK'
                            title='Search this vessel on Google'
                        >
                            <svg 
                                height='24' 
                                width='24' 
                                viewBox="0 0 24 24"
                                style={{
                                    marginLeft: '.5rem',
                                    cursor: 'pointer'
                                }}
                            >
                                <path fill='#fff' d="M21.995 21.288L15 14.291a7.317 7.317 0 1 0-.708.708l6.997 6.996zM9.5 15.8a6.3 6.3 0 1 1 6.3-6.3 6.307 6.307 0 0 1-6.3 6.3z"/>
                                <path fill="none" d="M0 0h24v24H0z"/>
                            </svg>
                        </a>

                    </div>

                    <div>
                        <SubtitleText className='margin-right-half'>
                            { vesselclass }
                        </SubtitleText>

                        <SubtitleText>
                            MMSI { mmsi }
                        </SubtitleText>
                    </div>
                    
                </InfoBlock>
                
                <InfoBlock
                    style={{
                        borderLeft: `1px solid ${DEFAULT_BORDER_COLOR}`,
                        borderRight: `1px solid ${DEFAULT_BORDER_COLOR}`
                    }}
                >
                    <TitleText
                        className='avenir-light'
                        style={{
                            marginBottom: '.2rem'
                        }}
                    >{startTime}</TitleText>

                    <SubtitleText>
                        AVG: { avgSpeed } kn { getDirection(+mean_cog) }
                    </SubtitleText>
                </InfoBlock>

                <InfoBlock>
                    
                    <SubtitleText
                        style={{
                            display: 'block'
                        }}
                    >
                        LENGTH {length} m
                    </SubtitleText>

                    <SubtitleText
                        style={{
                            display: 'block'
                        }}
                    >
                        BEAM {width} m
                    </SubtitleText>

                    <SubtitleText
                        style={{
                            display: 'block'
                        }}
                    >
                        DRAFT { draft ? `${draft} m` : 'N/A'}
                    </SubtitleText>

                </InfoBlock>
            
                <div 
                    style={{
                        height: '100%',
                        cursor: 'pointer'
                    }}
                    onClick={onClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path fill='#fff' d="M18.01 6.697L12.707 12l5.303 5.303-.707.707L12 12.707 6.697 18.01l-.707-.707L11.293 12 5.99 6.697l.707-.707L12 11.293l5.303-5.303z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </div>
            </div>
        );
    }

    return feature ? (
        <InfoWindowConatiner>
            { getContent() }
        </InfoWindowConatiner>
    ) : null;
}

export default ShipInfoWindow;
