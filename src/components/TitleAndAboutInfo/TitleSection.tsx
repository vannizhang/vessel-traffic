import React from 'react'
import { FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL } from '../../constants/UI'

type Props = {
    onClick: ()=>void;
}

const TitleSection:React.FC<Props> = ({
    onClick
}) => {
    return (
        <div
            style={{
                display: 'flex',
                cursor: 'pointer',
                // textShadow: '0 0 3px rgba(0,0,0,.8)',
                color: 'rgba(255,255,255,.8)'
            }}
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
                className='phone-hide'
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
