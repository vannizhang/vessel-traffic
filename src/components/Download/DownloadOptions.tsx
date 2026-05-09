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

import React from 'react'
import { DEFAULT_BORDER_COLOR, DEFAULT_TEXT_COLOR } from '../../constants/UI'
import { NOAAENCsLevel } from '../../types'

const DownloadOptionsData: {
    value: NOAAENCsLevel;
    label: string;
}[] = [
    {
        value: 'Overview',
        label: 'noaa electronic charts level 1'
    },
    {
        value: 'General',
        label: 'noaa electronic charts level 2'
    },
    {
        value: 'Coastal',
        label: 'noaa electronic charts level 3'
    },
    {
        value: 'IENC',
        label: 'inland electronic charts'
    },
];

type Props = {
    selectedENCsLevel: NOAAENCsLevel;
    downloadBySelectedMonthOnClick: ()=>void;
    activeENCsLevelOnChange: (value:NOAAENCsLevel)=>void;
}

const DownloadOptions:React.FC<Props> = ({
    selectedENCsLevel,
    downloadBySelectedMonthOnClick,
    activeENCsLevelOnChange
}) => {

    const getOptions = ()=>{

        const ENCsLevels = DownloadOptionsData.map(({
            value, label
        })=>{
            return (
                <div
                    className='ml-4'
                    key={value}
                    style={{
                        cursor: 'pointer',
                        color: selectedENCsLevel === value ? '#fff' : DEFAULT_TEXT_COLOR,
                    }}
                    onClick={activeENCsLevelOnChange.bind(this, value)}
                >
                    <div
                        style={{
                            display: 'inline-block',
                            borderRadius: '50%',
                            height: 6,
                            width: 6,
                            background: selectedENCsLevel === value ? '#fff' : 'transparent',
                            marginRight: '.5rem'
                        }}
                    ></div>

                    <span>{label}</span>
                </div>
            )
        });

        return (
            <>
                { ENCsLevels }

                <div
                    style={{
                        paddingTop: '.5rem',
                        marginTop: '.5rem',
                        // marginLeft: '1.5rem',
                        cursor: 'pointer',
                        borderTop: `1px solid ${DEFAULT_BORDER_COLOR}`
                    }}
                    onClick={downloadBySelectedMonthOnClick}
                >
                    <span 
                        style={{
                            marginLeft: '2rem'
                        }}
                    >All Tracks, by selected month</span>
                </div>
            </>
        )
    }

    return (
        <div
            className='font-size--2'
            style={{
                textTransform: 'uppercase'
            }}
        >
            { getOptions() }

        </div>
    )
}

export default DownloadOptions
