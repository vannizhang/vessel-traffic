import * as React from 'react';

import {
    MapView,
    ShipTrafficLayer,
    // ShipTrafficLayerQueryTask,
    // ShipTrafficLayerQueryResult,
    LayerList,
    BottomPanel,
    TimeSelector
} from '../';

// import { BookmarkData } from '../Bookmarks/Bookmarks';

import AppConfig from '../../AppConfig';
import { AppContext } from '../../contexts/AppContextProvider';
import { ActiveLayerTimeInfo } from '../../types';
import { MapCenterLocation } from '../MapView/MapView';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

const App:React.FC = ()=>{

    const { AISLayersData } = React.useContext(AppContext)

    const [ visibleSubLayer, setVisibleSubLayer ] = React.useState<ShipTrafficSubLayerName>('Tanker');

    // const [ activeDate, setActiveDate ] = React.useState<Date>(defaultActiveDate);

    const [ mapCenterLocation, setMapCenterLocation ] = React.useState<MapCenterLocation>({
        lat: 28,
        lon: -80,
        zoom: 7
    });
    
    const [ shipLayerQueryResult, setShipLayerQueryResult ] = React.useState<ShipTrafficFeature>();

    const [ activeLayerTimeInfo, setActiveLayerTimeInfo ] = React.useState<ActiveLayerTimeInfo>({
        month: +AISLayersData[0].Month,
        year: +AISLayersData[0].Year
    })

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
                {/* <div>
                    title of the app
                </div> */}

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        pointerEvents: 'initial'
                    }}
                >
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
                </div>

                {/* <div>
                    download the data
                </div> */}

            </BottomPanel>

        </>
    );
};

export default App;