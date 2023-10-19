import React, { ReactNode } from 'react'

import styled from 'styled-components'
import { DEFAULT_TEXT_COLOR } from '../../constants/UI';

const StyledBottomPanel = styled.div`
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 30px;
    height: 300px;
    /* background: radial-gradient(ellipse at bottom, rgba(27, 82, 139, 1), rgba(27, 82, 139, 0)); */
    background: radial-gradient( ellipse at bottom, rgba(27, 82, 139, 1) 0%, rgba(27, 82, 139, 0) 75% );
    z-index: 5;
    pointer-events: none;
`;

const GradientEffectAtBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(to top, rgba(27, 82, 139, 1), rgba(27, 82, 139, 0) 100%);
`;

const ChildrenWrapper = styled.div`
    position: relative;
    /* width: 100%; */
    margin: auto 1.5rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* justify-content:  */
`;

export const ChildAtCenterPosition = styled.div`
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
    max-width: 100%;
`

export const ChildAtSidePosition = styled.div`
    position: relative;
    /* width: 515px; */
    pointer-events: initial;
    color: ${DEFAULT_TEXT_COLOR};

    @media (max-width: 1120px) {
        display: none;
    }
`;

type Props = {
    children:ReactNode
}

const BottomPanel:React.FC<Props> = ({
    children
}:Props) => {
    return (
        <StyledBottomPanel>
            <GradientEffectAtBottom/>

            <ChildrenWrapper>
                { children }
            </ChildrenWrapper>

        </StyledBottomPanel>
    )
}

export default BottomPanel
