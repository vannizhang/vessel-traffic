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
    MobileHeader,
    TitleAndAboutInfo,
} from '../';

import {
    ChildAtCenterPosition,
    ChildAtSidePosition
} from '../BottomPanel/BottomPanel'

// import { BookmarkData } from '../Bookmarks/Bookmarks';

import AppConfig from '../../AppConfig';
import { AppContext } from '../../contexts/AppContextProvider';
import { ActiveLayerTimeInfo, NOAAENCsLevel } from '../../types';
import { getDefaultStateValuesFromHash, saveActiveLayerTime2Hash, saveMapCenterLocation2Hash, saveVisibleLayer2Hash } from '../../utils/URLHashParams';
import { MapCenterLocation } from '../MapView/MapView';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

import MobileHide from '../SharedUI/MobileHide';

const DefaultStateValues = getDefaultStateValuesFromHash()
// console.log(DefaultStateValues)

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
    });

    const [ showDownloadScreen, setShowDownloadScreen ] = React.useState<boolean>(false);

    const [ selectedENCsLevel, setSelectedENCsLevel ] = React.useState<NOAAENCsLevel>();

    const [ selectedENCsArea, setSelectedENCsArea ] = React.useState<string>();

    useEffect(() => {
        saveMapCenterLocation2Hash(mapCenterLocation)
    }, [mapCenterLocation]);

    useEffect(() => {
        saveActiveLayerTime2Hash(activeLayerTimeInfo)
    }, [activeLayerTimeInfo]);

    useEffect(() => {
        saveVisibleLayer2Hash(visibleSubLayer)
    }, [visibleSubLayer]);

    useEffect(() => {
        setShowDownloadScreen( selectedENCsArea ? true : false );
    }, [selectedENCsArea]);

    return (
        <>
            <MobileHeader />
            
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
                <MobileHide>
                    <ChildAtSidePosition>
                        <TitleAndAboutInfo />
                    </ChildAtSidePosition>
                </MobileHide>

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

                <MobileHide>
                    <ChildAtSidePosition>
                        <Download 
                            activeENCsLevel={selectedENCsLevel}
                            downloadBySelectedMonthOnClick={setShowDownloadScreen.bind(this, true)}
                            activeENCsLevelOnChange={setSelectedENCsLevel}
                        />
                    </ChildAtSidePosition>
                </MobileHide>

            </BottomPanel>

        </>
    );
};

export default App;