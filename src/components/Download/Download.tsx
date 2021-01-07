import React, {
    useState
} from 'react'
import { NOAAENCsLevel } from '../../types';

import DownloadBtn from './DownloadBtn';
import DownloadOptions from './DownloadOptions';

type Props = {
    activeENCsLevel: NOAAENCsLevel;
    downloadBySelectedMonthOnClick: ()=>void;
    activeENCsLevelOnChange: (value:NOAAENCsLevel)=>void;
};

const Download:React.FC<Props> = ({
    activeENCsLevel,
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
                    optionsVisible={showDownloadOptions}
                    onClick={setShowDownloadOptions.bind(this, !showDownloadOptions)}
                />

                { 
                    showDownloadOptions && 
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
