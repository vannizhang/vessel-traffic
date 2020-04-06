  
import * as React from 'react';

import {
    ShipTrafficSubLayerName
} from '../components/ShipTrafficLayer/ShipTrafficLayer';

import {
    urlFns
} from 'helper-toolkit-ts';

interface MapCenterLocation {
    lat: number;
    lon: number;
    zoom: number;
}

interface ContextProps {
    visibleSubLayer: ShipTrafficSubLayerName;
    setVisibleSubLayer: (subLayerName:ShipTrafficSubLayerName)=>void;

    activeDate: Date;
    setActiveDate: (activeDate:Date)=>void;

    mapCenterLocation: MapCenterLocation,
    setMapCenterLocation: (data:MapCenterLocation)=>void;
};

interface AppContextProviderProps {};

const KEYS = {
    visibleSubLayer: 'lyr',
    activeDate: 'dt',
    mapCenterLocation: 'loc'
}

export const AppContext = React.createContext<ContextProps>(null);

export const AppContextProvider:React.FC<AppContextProviderProps> = ({ 
    children 
})=>{

    const defaultValues = urlFns.parseQuery();

    const getDefaultMapLocation = ():MapCenterLocation=>{

        if(!defaultValues[KEYS.mapCenterLocation]){
            return null;
        }

        const [ lon, lat, zoom] = defaultValues[KEYS.mapCenterLocation].split(',').map((d:string)=>+d);

        return { lon, lat, zoom };
    };

    const defaultVisibleSubLayer = defaultValues[KEYS.visibleSubLayer] || 'Passenger';

    const defaultActiveDate = defaultValues[KEYS.activeDate] ? new Date(+defaultValues[KEYS.activeDate]) : null;

    const defaultMapLocation = getDefaultMapLocation();

    const [ visibleSubLayer, setVisibleSubLayer ] = React.useState<ShipTrafficSubLayerName>(defaultVisibleSubLayer);

    const [ activeDate, setActiveDate ] = React.useState<Date>(defaultActiveDate);

    const [ mapCenterLocation, setMapCenterLocation ] = React.useState<MapCenterLocation>(defaultMapLocation);


    const value = {
        visibleSubLayer,
        setVisibleSubLayer,
        activeDate,
        setActiveDate,
        mapCenterLocation, 
        setMapCenterLocation
    };

    React.useEffect(()=>{

        if(visibleSubLayer){
            urlFns.updateQueryParam({
                key: KEYS.visibleSubLayer,
                value: visibleSubLayer
            })
        }

        if(activeDate){
            urlFns.updateQueryParam({
                key: KEYS.activeDate,
                value: activeDate.getTime().toString()
            })
        }

        if(mapCenterLocation){
            const { lon, lat, zoom } = mapCenterLocation
            urlFns.updateQueryParam({
                key: KEYS.mapCenterLocation,
                value: `${lon},${lat},${zoom}`
            });
        }

    }, [ visibleSubLayer, activeDate, mapCenterLocation])

    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
};