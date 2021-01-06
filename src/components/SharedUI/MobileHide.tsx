import React from 'react';
import { IS_MOBILE_DEVICE } from '../../constants/UI';

const MobileHide:React.FC = ({
    children
}) => {
    return !IS_MOBILE_DEVICE ? (
        <>{ children }</>
    ) : null;
}

export default MobileHide;
