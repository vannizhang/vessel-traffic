import React, {
    useEffect
} from 'react';

import {
    MapView,
    ENCLayer,
    Download,
    DownloadScreen,
    ShipTrafficLayer,
    ShipTrafficLayerQueryTask,
    ShipTrafficLayerQueryResult,
    LayerList,
    BottomPanel,
    TimeSelector,
    MobileHeader,
    TitleAndAboutInfo,
    ShipInfoWindow,
    NauticalBoundariesLayer
} from '../';

import {
    ChildAtCenterPosition,
    ChildAtSidePosition
} from '../BottomPanel/BottomPanel'

// import { BookmarkData } from '../Bookmarks/Bookmarks';

import AppConfig from '../../AppConfig';
import { AppContext } from '../../contexts/AppContextProvider';
import { ActiveLayerTimeInfo, NOAAENCsLevel } from '../../types';
import { getDefaultStateValuesFromHash, saveActiveLayerTime2Hash, saveMapCenterLocation2Hash, saveMMSI2Hash, saveVisibleLayer2Hash } from '../../utils/URLHashParams';
import { MapCenterLocation } from '../MapView/MapView';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

import MobileHide from '../SharedUI/MobileHide';
import { ENCLayerFeature } from '../ENCLayer/ENCLayer';

const DefaultStateValues = getDefaultStateValuesFromHash()
// console.log(DefaultStateValues)

const App:React.FC = ()=>{

    const { AISLayersData } = React.useContext(AppContext)

    const [ visibleSubLayer, setVisibleSubLayer ] = React.useState<ShipTrafficSubLayerName>(DefaultStateValues.sublayer || 'Cargo');

    // const [ activeDate, setActiveDate ] = React.useState<Date>(defaultActiveDate);

    const [ mapCenterLocation, setMapCenterLocation ] = React.useState<MapCenterLocation>(DefaultStateValues['@'] || {
        lat: 40,
        lon: -108,
        zoom: 4
    });
    
    const [ shipLayerQueryResult, setShipLayerQueryResult ] = React.useState<ShipTrafficFeature>();

    const [ activeLayerTimeInfo, setActiveLayerTimeInfo ] = React.useState<ActiveLayerTimeInfo>(DefaultStateValues.time || {
        month: +AISLayersData[AISLayersData.length - 1].Month,
        year: +AISLayersData[AISLayersData.length - 1].Year
    });

    const [ showDownloadOptions, setShowDownloadOptions ] = React.useState<boolean>(false);

    const [ showDownloadScreen, setShowDownloadScreen ] = React.useState<boolean>(false);

    const [ selectedENCsLevel, setSelectedENCsLevel ] = React.useState<NOAAENCsLevel>();

    const [ selectedENCFeature, setSelectedENCFeature ] = React.useState<ENCLayerFeature>();

    const [ showNauticalBoundaries, setShowNauticalBoundaries ] = React.useState<boolean>(false);

    useEffect(() => {
        saveMapCenterLocation2Hash(mapCenterLocation)
    }, [mapCenterLocation]);

    useEffect(() => {
        saveActiveLayerTime2Hash(activeLayerTimeInfo)
    }, [activeLayerTimeInfo]);

    useEffect(() => {
        saveVisibleLayer2Hash(visibleSubLayer);
        setShipLayerQueryResult(null);
    }, [visibleSubLayer]);

    useEffect(() => {
        const mmsi = shipLayerQueryResult ? shipLayerQueryResult.attributes.mmsi : undefined;
        saveMMSI2Hash(mmsi);
    }, [shipLayerQueryResult]);

    useEffect(() => {
        setShowDownloadScreen( selectedENCFeature ? true : false );
    }, [selectedENCFeature]);

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
                    <NauticalBoundariesLayer 
                        isVisible={showNauticalBoundaries}
                    />

                    <ShipTrafficLayerQueryTask 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        onSelect={setShipLayerQueryResult}
                    />
                    
                    <ShipTrafficLayerQueryResult 
                        visibleSubLayer={visibleSubLayer}
                        feature={shipLayerQueryResult}
                    />
                    
                    <ShipTrafficLayer 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        faded={shipLayerQueryResult ? true : false}
                    />

                    <ENCLayer
                        level={selectedENCsLevel}
                        visible={showDownloadOptions}
                        onSelect={setSelectedENCFeature}
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
                    />

                    <LayerList 
                        visibleSubLayer={visibleSubLayer}
                        isNauticalReferenceLayerVisible={showNauticalBoundaries}
                        onChange={setVisibleSubLayer}
                        nauticalReferenceLayerOnToggle={setShowNauticalBoundaries.bind(this, !showNauticalBoundaries)}
                    />
                </ChildAtCenterPosition>

                <MobileHide>
                    <ChildAtSidePosition>
                        <Download 
                            visible={showDownloadOptions}
                            activeENCsLevel={selectedENCsLevel}
                            toggleBtnOnClick={setShowDownloadOptions.bind(this, !showDownloadOptions)}
                            downloadBySelectedMonthOnClick={setShowDownloadScreen.bind(this, true)}
                            activeENCsLevelOnChange={(value:NOAAENCsLevel)=>{
                                const newVlaue = value !== selectedENCsLevel ? value : null;
                                setSelectedENCsLevel(newVlaue);
                            }}
                        />
                    </ChildAtSidePosition>
                </MobileHide>

            </BottomPanel>

            {
                showDownloadScreen && (
                    <DownloadScreen 
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        selectedENCFeature={selectedENCFeature}
                        onClose={()=>{
                            setShowDownloadScreen(false);
                            setSelectedENCFeature(null);
                        }}
                    />
                )
            }

            {
                shipLayerQueryResult && (
                    <ShipInfoWindow 
                        visibleSubLayer={visibleSubLayer}
                        feature={shipLayerQueryResult}
                        onClose={setShipLayerQueryResult.bind(this, null)}
                    />
                )
            }

        </>
    );
};

export default App;