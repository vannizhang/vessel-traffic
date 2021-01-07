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
                alignItems: 'flex-end',
            }}
        >
            <div>
                <DownloadBtn 
                    optionsVisible={visible}
                    onClick={toggleBtnOnClick}
                />

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
