  
import * as React from 'react';

import {
    ShipTrafficSubLayerName
} from '../components/ShipTrafficLayer/ShipTrafficLayer';

interface ContextProps {
    visibleSubLayer: ShipTrafficSubLayerName;
    setVisibleSubLayer: (subLayerName:ShipTrafficSubLayerName)=>void;

    activeDate: Date;
    setActiveDate: (activeDate:Date)=>void;
};

interface AppContextProviderProps {};

export const AppContext = React.createContext<ContextProps>(null);

export const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children 
})=>{

    const [ visibleSubLayer, setVisibleSubLayer ] = React.useState<ShipTrafficSubLayerName>('Passenger');

    const [ activeDate, setActiveDate ] = React.useState<Date>();

    const value = {
        visibleSubLayer,
        setVisibleSubLayer,
        activeDate,
        setActiveDate
    };

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
};