import React from 'react'
import { DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR, FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL, IS_MOBILE_DEVICE } from '../../constants/UI'

type Props = {
    onClick: ()=>void;
}

export const STYLE_WITH_TOP_BORDER:React.CSSProperties = {
    paddingTop: '.75rem',
    borderTop: `1px solid ${DEFAULT_BORDER_COLOR}`
}

const getStyleForTitleSection = ():React.CSSProperties =>{

    const Default_Style = {
        display: 'flex',
        cursor: 'pointer',
        // textShadow: '0 0 3px rgba(0,0,0,.8)',
        color: 'rgba(255,255,255,.8)',
    }

    if(IS_MOBILE_DEVICE){
        return {
            ...Default_Style,
            justifyContent: 'flex-end'
        }
    }

    return {
        ...Default_Style,
        ...STYLE_WITH_TOP_BORDER,
    }
}

const TitleSection:React.FC<Props> = ({
    onClick
}) => {

    return (
        <div
            style={getStyleForTitleSection()}
            onClick={onClick}
        >
            <div
                className='margin-right-1'
            >
                <span className='avenir-light' 
                    style={{
                        fontSize: FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL
                    }}
                >
                    U.S. VESSEL TRAFFIC
                </span>
            </div>

            <div 
                // className='phone-hide'
                style={{
                    fontSize: '.8rem'
                }}
            >
                <span >
                    AIS shipping tracks since Jan 2017 
                </span>
                <br />
                <span>
                    Find patterns & download for analysis
                </span>
            </div>
        </div>
    )
}

export default TitleSection
