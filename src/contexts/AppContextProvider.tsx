  
import React from 'react';

import {
    fetchShipTrafficLayersData,
    ShipTrafficLayerInfo
} from '../services/getAISLayersInfo';

interface ContextProps {
    AISLayersData: ShipTrafficLayerInfo[];
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