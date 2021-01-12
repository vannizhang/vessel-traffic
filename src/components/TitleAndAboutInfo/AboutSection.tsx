import React from 'react'
import styled from 'styled-components';
import { BREAKPOINT_EXTRA_WIDE, BREAKPOINT_WIDE, DEFAULT_TEXT_COLOR } from '../../constants/UI';

const AboutContainer = styled.div`
    color: ${DEFAULT_TEXT_COLOR};
    max-width: 515px;

    @media (max-width: ${BREAKPOINT_EXTRA_WIDE}px) {
        max-width: 300px;
    }
`;

const StyledP = styled.p`
    font-size: .8rem;
    line-height: .9rem;
    margin-bottom: .75rem;
`
const AboutSection = () => {
    return (
        <AboutContainer
            className='font-size--3 leader-quarter'
        >
            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>

            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>

            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>
        </AboutContainer>
    )
}

export default AboutSection
