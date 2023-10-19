import React from 'react';
import { IS_MOBILE_DEVICE } from '../../constants/UI';

type Props = {
    children:React.ReactNode
}

const MobileHide:React.FC<Props> = ({
    children
}:Props) => {
    return !IS_MOBILE_DEVICE ? (
        <>{ children }</>
    ) : null;
}

export default MobileHide;
