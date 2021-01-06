import React from 'react'

import {
    TitleAndAboutInfo
} from '../';

import MobileShow from '../SharedUI/MobileShow'

const MobileHeader = () => {
    return (
        <>
            <MobileShow>
                <div
                    style={{
                        position: 'absolute',
                        top: '.5rem',
                        left: '80px',
                        right: '.5rem',
                        zIndex: 5
                    }}
                >
                    <TitleAndAboutInfo />
                </div>
            </MobileShow>
        </>
    );
}

export default MobileHeader
