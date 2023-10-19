  
import React from 'react';

import {
    miscFns
} from 'helper-toolkit-ts';

import {
    fetchShipTrafficLayersData,
    ShipTrafficLayerInfo
} from '../services/getAISLayersInfo';
import { AISFileSizeInfo, getAISFileSize } from '../services/getAISFileSizeLookup';

interface ContextProps {
    AISLayersData: ShipTrafficLayerInfo[];
    AISFileSizeLookup: AISFileSizeInfo;
    isMobile: boolean;
};

interface AppContextProviderProps {};

export const AppContext = React.createContext<ContextProps>(null);

type Props = {
    children:React.ReactNode
}

export const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children 
}:Props)=>{

    const [ value, setValue ] = React.useState<ContextProps>()

    const init = async()=>{

        const AISLayersData = await fetchShipTrafficLayersData();

        const AISFileSizeLookup = await getAISFileSize();
        // console.log(AISFileSizeLookup)

        const value:ContextProps = {
            AISLayersData,
            isMobile: miscFns.isMobileDevice(),
            AISFileSizeLookup
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