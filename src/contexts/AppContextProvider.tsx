  
import React from 'react';

import {
    miscFns
} from 'helper-toolkit-ts';

import {
    fetchShipTrafficLayersData,
    ShipTrafficLayerInfo
} from '../services/getAISLayersInfo';

interface ContextProps {
    AISLayersData: ShipTrafficLayerInfo[];
    isMobile: boolean;
};

interface AppContextProviderProps {};

export const AppContext = React.createContext<ContextProps>(null);

export const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children 
})=>{

    const [ value, setValue ] = React.useState<ContextProps>()

    const init = async()=>{

        const AISLayersData = await fetchShipTrafficLayersData();

        const value:ContextProps = {
            AISLayersData,
            isMobile: miscFns.isMobileDevice()
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