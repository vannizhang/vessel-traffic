import React from 'react';
import { IS_MOBILE_DEVICE } from '../../constants/UI';

const MobileShow:React.FC = ({
    children
}) => {
    return IS_MOBILE_DEVICE ? (
        <>{ children }</>
    ) : null;
}

export default MobileShow;
