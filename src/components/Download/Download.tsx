import React, {
    useState
} from 'react'
import { DEFAULT_BORDER_COLOR } from '../../constants/UI'

import DownloadBtn from './DownloadBtn'

const Download = () => {

    const [ showDownloadOptions, setShowDownloadOptions ] = useState<boolean>(false);

    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                <DownloadBtn 
                    onClick={setShowDownloadOptions.bind(this, !showDownloadOptions)}
                />
            </div>
            
        </div>
    )
}

export default Download
