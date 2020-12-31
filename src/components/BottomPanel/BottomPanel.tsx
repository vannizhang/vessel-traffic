import React from 'react'

import styled from 'styled-components'

const StyledBottomPanel = styled.div`
    position: absolute;
    bottom: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 2rem 0;
    /* height: 300px; */
    background: radial-gradient(ellipse at bottom, rgba(27, 82, 139, 1), rgba(27, 82, 139, 0));
    z-index: 5;
`;

const GradientEffectAtBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, rgba(27, 82, 139, 1) 0%, rgba(27, 82, 139, 0) 100%);
`;

const ChildrenWrapper = styled.div`
    position: relative;
    /* width: 100%; */
    margin: auto 3rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /* justify-content:  */
`;

const BottomPanel:React.FC = ({
    children
}) => {
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
