import React, {
    useEffect
} from 'react';

import {
    MapView,
    Download,
    ShipTrafficLayer,
    // ShipTrafficLayerQueryTask,
    // ShipTrafficLayerQueryResult,
    LayerList,
    BottomPanel,
    TimeSelector,
    TitleAndAboutInfo
} from '../';

import {
    ChildAtCenterPosition,
    ChildAtSidePosition
} from '../BottomPanel/BottomPanel'

// import { BookmarkData } from '../Bookmarks/Bookmarks';

import AppConfig from '../../AppConfig';
import { AppContext } from '../../contexts/AppContextProvider';
import { ActiveLayerTimeInfo } from '../../types';
import { getDefaultStateValuesFromHash, saveActiveLayerTime2Hash, saveMapCenterLocation2Hash, saveVisibleLayer2Hash } from '../../utils/URLHashParams';
import { MapCenterLocation } from '../MapView/MapView';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

const DefaultStateValues = getDefaultStateValuesFromHash()
console.log(DefaultStateValues)

const App:React.FC = ()=>{

    const { AISLayersData } = React.useContext(AppContext)

    const [ visibleSubLayer, setVisibleSubLayer ] = React.useState<ShipTrafficSubLayerName>(DefaultStateValues.sublayer || 'Cargo');

    // const [ activeDate, setActiveDate ] = React.useState<Date>(defaultActiveDate);

    const [ mapCenterLocation, setMapCenterLocation ] = React.useState<MapCenterLocation>(DefaultStateValues['@'] || {
        lat: 28,
        lon: -80,
        zoom: 7
    });
    
    const [ shipLayerQueryResult, setShipLayerQueryResult ] = React.useState<ShipTrafficFeature>();

    const [ activeLayerTimeInfo, setActiveLayerTimeInfo ] = React.useState<ActiveLayerTimeInfo>(DefaultStateValues.time || {
        month: +AISLayersData[0].Month,
        year: +AISLayersData[0].Year
    })

    useEffect(() => {
        saveMapCenterLocation2Hash(mapCenterLocation)
    }, [mapCenterLocation]);

    useEffect(() => {
        saveActiveLayerTime2Hash(activeLayerTimeInfo)
    }, [activeLayerTimeInfo]);

    useEffect(() => {
        saveVisibleLayer2Hash(visibleSubLayer)
    }, [visibleSubLayer]);

    return (
        <>
            <div style={{
                'position': 'absolute',
                'top': '0',
                'bottom': '0',
                'left': '0',
                'right': '0'
            }}>
                
                <MapView 
                    webmapId={AppConfig.WebMapID}
                    defaultMapCenterLocation={mapCenterLocation}
                    onStationary={setMapCenterLocation}
                >
                    {/* <ShipTrafficLayerQueryTask 
                        onSelect={setShipLayerQueryResult}
                    />
                    
                    <ShipTrafficLayerQueryResult 
                        feature={shipLayerQueryResult}
                    /> */}
                    
                    <ShipTrafficLayer 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                    />

                </MapView>

            </div>

            <BottomPanel>
                <ChildAtSidePosition>
                    <TitleAndAboutInfo />
                </ChildAtSidePosition>
                
                <ChildAtCenterPosition>
                    <TimeSelector 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        onChange={setActiveLayerTimeInfo}
                        minYear={+AISLayersData[0].Year}
                        maxYear={+AISLayersData[AISLayersData.length - 1].Year}
                    />

                    <LayerList 
                        visibleSubLayer={visibleSubLayer}
                        isNauticalReferenceLayerVisible={false}
                        onChange={setVisibleSubLayer}
                    />
                </ChildAtCenterPosition>

                <ChildAtSidePosition>
                    <Download />
                </ChildAtSidePosition>
                
            </BottomPanel>

        </>
    );
};

export default App;