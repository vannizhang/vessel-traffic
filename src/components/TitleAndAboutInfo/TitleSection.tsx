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
import { DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR, FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL, IS_MOBILE_DEVICE } from '../../constants/UI'
import './TitleSection.css';

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

            <div className="title-subtitle">
                <span >
                    AIS shipping tracks since Jan 2015 
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
