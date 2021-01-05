import React, {
    useState
} from 'react';

import TitleSection from './TitleSection';
import AboutSection from './AboutSection';
import { DEFAULT_BORDER_COLOR } from '../../constants/UI';

const TitleAndAboutInfo = () => {

    const [ isAboutInfoVisible, setIsAboutInfoVisible ] = useState<boolean>(false);

    return (
        <div
            style={{
                paddingTop: '.75rem',
                borderTop: `1px solid ${DEFAULT_BORDER_COLOR}`
            }}
        >
            <TitleSection 
                onClick={setIsAboutInfoVisible.bind(this, !isAboutInfoVisible)}
            />

            {
                isAboutInfoVisible && <AboutSection />
            }
        </div>
    )
}

export default TitleAndAboutInfo
