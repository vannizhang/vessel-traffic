import React from 'react'
import styled from 'styled-components';
import { DEFAULT_TEXT_COLOR } from '../../constants/UI';

const StyledP = styled.p`
    font-size: .8rem;
    line-height: .9rem;
    margin-bottom: .75rem;
`


const AboutSection = () => {
    return (
        <div
            className='font-size--3 leader-quarter'
            style={{
                color: DEFAULT_TEXT_COLOR
            }}
        >
            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>

            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>

            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </StyledP>
        </div>
    )
}

export default AboutSection