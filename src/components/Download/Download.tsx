import React, {
    useState
} from 'react'
import { NOAAENCsLevel } from '../../types';

import DownloadBtn from './DownloadBtn';
import DownloadOptions from './DownloadOptions';

type Props = {
    visible: boolean;
    activeENCsLevel: NOAAENCsLevel;
    toggleBtnOnClick: ()=>void;
    downloadBySelectedMonthOnClick: ()=>void;
    activeENCsLevelOnChange: (value:NOAAENCsLevel)=>void;
};

const Download:React.FC<Props> = ({
    visible,
    activeENCsLevel,
    toggleBtnOnClick,
    downloadBySelectedMonthOnClick,
    activeENCsLevelOnChange
}) => {

    const [ showDownloadOptions, setShowDownloadOptions ] = useState<boolean>(false);

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                // alignItems: 'flex-end',
            }}
        >
            <div>
                <DownloadBtn 
                    optionsVisible={visible}
                    onClick={toggleBtnOnClick}
                />

                {
                    visible && 
                    <div
                        className=''
                        style={{
                            maxWidth: 345,
                            fontSize: '.75rem',
                            paddingLeft: 10
                        }}
                    >
                        <p
                            className='trailer-half'
                        >Choose an area within which to download vessel tracks.<br/> They are available in a range of scales to balance your needs.</p>
                    </div>
                }
            
                { 
                    visible && 
                    <DownloadOptions 
                        selectedENCsLevel={activeENCsLevel}
                        downloadBySelectedMonthOnClick={downloadBySelectedMonthOnClick}
                        activeENCsLevelOnChange={activeENCsLevelOnChange}
                    />
                }

            </div>
            
        </div>
    )
}

export default Download
