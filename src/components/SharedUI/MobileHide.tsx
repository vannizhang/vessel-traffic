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
