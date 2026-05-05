/* Copyright 2026 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
