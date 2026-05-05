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

import React, { ReactNode } from 'react'
import './BottomPanel.css';

export const ChildAtCenterPosition:React.FC<{children:ReactNode}> = ({children}) => (
    <div className="child-at-center-position">{children}</div>
);

export const ChildAtSidePosition:React.FC<{children:ReactNode}> = ({children}) => (
    <div className="child-at-side-position">{children}</div>
);

type Props = {
    children:ReactNode
}

const BottomPanel:React.FC<Props> = ({
    children
}:Props) => {
    return (
        <div className="styled-bottom-panel">
            <div className="gradient-effect-at-bottom"/>

            <div className="children-wrapper">
                { children }
            </div>

        </div>
    )
}

export default BottomPanel
