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

import {
    miscFns
} from 'helper-toolkit-ts';

import {
    // fetchShipTrafficLayersData,
    ShipTrafficLayerInfo,
    shipTrafficLayersData
} from '../services/getAISLayersInfo';
import { getDefaultStateValuesFromHash } from '../utils/URLHashParams';
// import { AISFileSizeInfo, getAISFileSize } from '../services/getAISFileSizeLookup';

interface ContextProps {
    AISLayersData: ShipTrafficLayerInfo[];
    // AISFileSizeLookup: AISFileSizeInfo;
    isMobile: boolean;
    /**
     * if true, the bottom panel will be hidden
     */
    hideBottomPanel?: boolean;
};

interface AppContextProviderProps {};

export const AppContext = React.createContext<ContextProps>(null);

type Props = {
    children:React.ReactNode
}

const DefaultStateValues = getDefaultStateValuesFromHash()

export const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children 
}:Props)=>{

    const [ value, setValue ] = React.useState<ContextProps>()

    const init = async()=>{

        const AISLayersData = shipTrafficLayersData;

        // const AISFileSizeLookup = await getAISFileSize();
        // // console.log(AISFileSizeLookup)

        const value:ContextProps = {
            AISLayersData,
            isMobile: miscFns.isMobileDevice(),
            hideBottomPanel: DefaultStateValues.hideBottomPanel
            // AISFileSizeLookup
        };

        setValue(value)
    }

    React.useEffect(()=>{
        init();
    }, []);

    return (
        <AppContext.Provider value={value}>
            { value ? children : null }
        </AppContext.Provider>
    )
};