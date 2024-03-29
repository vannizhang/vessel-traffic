import React from 'react';
import styled from 'styled-components'
import { DEFAULT_TEXT_COLOR, FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL } from '../../constants/UI'

import {
    STYLE_WITH_TOP_BORDER
} from '../TitleAndAboutInfo/TitleSection'

const DownloadBtnLabel = styled.span`
    @media (max-width: 1250px) {
        display: none;
    }
`

const DownloadBtnLabelNarrowScreen = styled.span`
    @media (min-width: 1250px) {
        display: none;
    }
`

type Props = {
    optionsVisible: boolean;
    onClick: ()=>void;
}

const DownloadIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><path fill={DEFAULT_TEXT_COLOR} d="M31.8 16.704c0 3.489-2.765 6.296-5.238 6.296H24v-1h2.562c1.92 0 4.238-2.362 4.238-5.296a5.359 5.359 0 0 0-3.607-5.097l-.407-.138-.582-.198-.086-.608-.06-.425A7.953 7.953 0 0 0 18.462 3.2a7.647 7.647 0 0 0-6.683 4.187l-.259.488-.37.696-.763-.197-.535-.138a3.474 3.474 0 0 0-.874-.13 2.943 2.943 0 0 0-3.024 2.766l-.022.404-.031.573-.51.262-.357.183A5.173 5.173 0 0 0 2.2 16.897c0 2.653 2.166 5.085 4.545 5.103H11v1H6.737C3.733 22.978 1.2 19.988 1.2 16.897a6.169 6.169 0 0 1 3.378-5.493l.357-.183.022-.402a3.93 3.93 0 0 1 4.022-3.713 4.432 4.432 0 0 1 1.125.162l.534.138.26-.488A8.645 8.645 0 0 1 18.462 2.2a8.956 8.956 0 0 1 8.584 7.897l.06.425.408.138a6.358 6.358 0 0 1 4.285 6.044zM18 14h-1v15.354l-2.646-2.647-.707.707 3.853 3.854 3.854-3.854-.707-.707L18 29.354z"/><path fill="none" d="M0 0h32v32H0z"/></svg>;

const CloseIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" height="32" width="32"><path fill={DEFAULT_TEXT_COLOR} d="M23.985 8.722L16.707 16l7.278 7.278-.707.707L16 16.707l-7.278 7.278-.707-.707L15.293 16 8.015 8.722l.707-.707L16 15.293l7.278-7.278z"/><path fill="none" d="M0 0h32v32H0z"/></svg>

const DownloadBtn:React.FC<Props> = ({
    optionsVisible,
    onClick
}) => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                // share the top border style with Title section
                ...STYLE_WITH_TOP_BORDER
            }}
            onClick={onClick}
        >
            <span style={{
                marginRight: '.75rem'
            }}>
                {
                    optionsVisible ? CloseIcon : DownloadIcon
                }
                
            </span>

            <span className='avenir-light' 
                style={{
                    fontSize: FONT_SIZE_LARGE_TEXT_BOTTOM_PANEL,
                }}
            >
                <DownloadBtnLabel>
                    DOWNLOAD OPTIONS
                </DownloadBtnLabel>

                <DownloadBtnLabelNarrowScreen>
                    DOWNLOAD
                </DownloadBtnLabelNarrowScreen>
                
            </span>
        </div>
    )
}

export default DownloadBtn
