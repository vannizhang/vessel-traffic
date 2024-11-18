  
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