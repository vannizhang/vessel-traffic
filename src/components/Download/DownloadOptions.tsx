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

    const getOptions = ():JSX.Element=>{

        const ENCsLevels = DownloadOptionsData.map(({
            value, label
        })=>{
            return (
                <div
                    className='margin-left-1'
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
