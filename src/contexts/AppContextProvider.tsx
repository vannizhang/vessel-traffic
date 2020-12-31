  
import React from 'react';

import {
    fetchShipTrafficLayersData,
    ShipTrafficLayerInfo
} from '../services/getAISLayersInfo';

// import { init } from 'esri/core/watchUtils';

// interface MapCenterLocation {
//     lat: number;
//     lon: number;
//     zoom: number;
// }

interface ContextProps {

    AISLayersData: ShipTrafficLayerInfo[];

    // visibleSubLayer: ShipTrafficSubLayerName;
    // setVisibleSubLayer: (subLayerName:ShipTrafficSubLayerName)=>void;

    // // activeDate: Date;
    // // setActiveDate: (activeDate:Date)=>void;

    // mapCenterLocation: MapCenterLocation,
    // setMapCenterLocation: (data:MapCenterLocation)=>void;
};

interface AppContextProviderProps {};

// const KEYS = {
//     visibleSubLayer: 'lyr',
//     activeDate: 'dt',
//     mapCenterLocation: 'loc'
// }

// /////////////////////////////////////////////////////////////////////////////
// // NEED TO CLEAN UP THIS SECTION LATER
// const defaultValues = urlFns.parseQuery();

// const getDefaultMapLocation = ():MapCenterLocation=>{

//     if(!defaultValues[KEYS.mapCenterLocation]){
//         return null;
//     }

//     const [ lon, lat, zoom] = defaultValues[KEYS.mapCenterLocation].split(',').map((d:string)=>+d);

//     return { lon, lat, zoom };
// };

// const defaultVisibleSubLayer = defaultValues[KEYS.visibleSubLayer] || 'Passenger';

// // const defaultActiveDate = defaultValues[KEYS.activeDate] ? new Date(+defaultValues[KEYS.activeDate]) : null;

// const defaultMapLocation = getDefaultMapLocation();

// /////////////////////////////////////////////////////////////////////////////////


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

    // React.useEffect(()=>{

    //     if(visibleSubLayer){
    //         urlFns.updateQueryParam({
    //             key: KEYS.visibleSubLayer,
    //             value: visibleSubLayer
    //         })
    //     }

    //     setValue(value=>{
    //         return {
    //             ...value,
    //             visibleSubLayer
    //         }
    //     })

    // }, [ visibleSubLayer])

    // React.useEffect(()=>{

    //     if(mapCenterLocation){
    //         const { lon, lat, zoom } = mapCenterLocation
    //         urlFns.updateQueryParam({
    //             key: KEYS.mapCenterLocation,
    //             value: `${lon},${lat},${zoom}`
    //         });
    //     }

        
    //     setValue(value=>{
    //         return {
    //             ...value,
    //             mapCenterLocation
    //         }
    //     })

    // }, [ mapCenterLocation])

    return (
        <AppContext.Provider value={value}>
            { value ? children : null }
        </AppContext.Provider>
    )
};