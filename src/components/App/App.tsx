import React, {
    useEffect
} from 'react';

import {
    MapView,
    ENCLayer,
    Download,
    // DocumentHead,
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
    NauticalBoundariesLayer,
    NauticalLayerInfoWindow,
    NauticalQueryResult
} from '../';

import {
    ChildAtCenterPosition,
    ChildAtSidePosition
} from '../BottomPanel/BottomPanel'

// import { BookmarkData } from '../Bookmarks/Bookmarks';

// import AppConfig from '../../AppConfig';
import { AppContext } from '../../contexts/AppContextProvider';
import { ActiveLayerTimeInfo, NOAAENCsLevel } from '../../types';
import { getDefaultStateValuesFromHash, saveActiveLayerTime2Hash, saveMapCenterLocation2Hash, saveVisibleLayer2Hash, saveQueryPoint2Hash } from '../../utils/URLHashParams';
import { MapCenterLocation } from '../MapView/MapView';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { ShipTrafficFeature, ShipLayerQueryResult } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

import MobileHide from '../SharedUI/MobileHide';
import { ENCLayerFeature } from '../ENCLayer/ENCLayer';
import { NauticalBoundariesLayerQueryResult } from '../NauticalBoundariesLayer/NauticalBoundariesLayer';
import { MainenanceMessage } from '../MainenanceMessage/MainenanceMessage';

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
    
    const [ activeLayerTimeInfo, setActiveLayerTimeInfo ] = React.useState<ActiveLayerTimeInfo>(DefaultStateValues.time || {
        month: +AISLayersData[AISLayersData.length - 1].Month,
        year: +AISLayersData[AISLayersData.length - 1].Year
    });

    const [ shipLayerQueryResult, setShipLayerQueryResult ] = React.useState<ShipLayerQueryResult>();

    const [ nauticalLayerQueryResult, setNauticalLayerQueryResult ] = React.useState<NauticalBoundariesLayerQueryResult>();

    const [ showDownloadOptions, setShowDownloadOptions ] = React.useState<boolean>(false);

    const [ showDownloadScreen, setShowDownloadScreen ] = React.useState<boolean>(false);

    const [ selectedENCsLevel, setSelectedENCsLevel ] = React.useState<NOAAENCsLevel>();

    const [ selectedENCFeature, setSelectedENCFeature ] = React.useState<ENCLayerFeature>();

    const [ showNauticalBoundaries, setShowNauticalBoundaries ] = React.useState<boolean>(false);

    const [ isNauticalBoundariesInVisibleRange, setIsNauticalBoundariesInVisibleRange ] = React.useState<boolean>(false);

    useEffect(() => {
        saveMapCenterLocation2Hash(mapCenterLocation)
    }, [mapCenterLocation]);

    useEffect(() => {
        saveActiveLayerTime2Hash(activeLayerTimeInfo)
    }, [activeLayerTimeInfo]);

    useEffect(() => {
        saveVisibleLayer2Hash(visibleSubLayer);
        setShipLayerQueryResult(null);

        document.title = `U.S. Vessel Traffic | ${visibleSubLayer}`;
    }, [visibleSubLayer]);

    useEffect(() => {
        saveQueryPoint2Hash(shipLayerQueryResult ? shipLayerQueryResult.queryGeometry : undefined);

        if(shipLayerQueryResult){
            setNauticalLayerQueryResult(null)
        }
    }, [shipLayerQueryResult]);

    useEffect(() => {
        setShowDownloadScreen( selectedENCFeature ? true : false );
    }, [selectedENCFeature]);

    return (
        <>

            <MobileHeader />

            <MainenanceMessage />
            
            <div style={{
                'position': 'absolute',
                'top': '0',
                'bottom': '0',
                'left': '0',
                'right': '0'
            }}>
                
                <MapView 
                    // webmapId={AppConfig.WebMapID}
                    defaultMapCenterLocation={mapCenterLocation}
                    onStationary={setMapCenterLocation}
                >
                    <NauticalBoundariesLayer 
                        isVisible={showNauticalBoundaries}
                        isInVisibleScaleOnChange={setIsNauticalBoundariesInVisibleRange}
                        queryResultOnSelected={setNauticalLayerQueryResult}
                    />

                    <NauticalQueryResult 
                        data={nauticalLayerQueryResult}
                    />

                    {/* <ShipTrafficLayerQueryTask 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        defaultQueryPoint={DefaultStateValues.queryPoint}
                        onSelect={setShipLayerQueryResult}
                    />
                    
                    <ShipTrafficLayerQueryResult 
                        visibleSubLayer={visibleSubLayer}
                        feature={shipLayerQueryResult ? shipLayerQueryResult.feature : undefined}
                    /> */}
                    
                    {/* <ShipTrafficLayer 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        faded={shipLayerQueryResult ? true : false}
                    /> */}

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

                {/* <ChildAtCenterPosition>
                    <TimeSelector 
                        visibleSubLayer={visibleSubLayer}
                        activeLayerTimeInfo={activeLayerTimeInfo}
                        onChange={setActiveLayerTimeInfo}
                    />

                    <LayerList 
                        visibleSubLayer={visibleSubLayer}
                        isNauticalReferenceLayerVisible={showNauticalBoundaries}
                        isNauticalBoundariesInVisibleRange={isNauticalBoundariesInVisibleRange}
                        onChange={setVisibleSubLayer}

                        nauticalReferenceLayerOnToggle={()=>{
                            setShowNauticalBoundaries(!showNauticalBoundaries);
                            setNauticalLayerQueryResult(null);
                        }}
                    />
                </ChildAtCenterPosition> */}

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
                        feature={shipLayerQueryResult ? shipLayerQueryResult.feature : undefined}
                        onClose={()=>{
                            setShipLayerQueryResult(null);
                            setNauticalLayerQueryResult(null);
                        }}
                    />
                )
            }

            {   nauticalLayerQueryResult && !shipLayerQueryResult ? (
                    <NauticalLayerInfoWindow 
                        data={nauticalLayerQueryResult}
                        onClose={setNauticalLayerQueryResult.bind(this, null)}
                    />
                ): null
            }

        </>
    );
};

export default App;