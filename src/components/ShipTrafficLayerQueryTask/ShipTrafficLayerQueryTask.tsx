import React, {
    useEffect, useRef
} from 'react'

import { loadModules } from 'esri-loader';

// import {
//     AppContext
// } from '../../contexts/AppContextProvider';

import { getLayerDataByDate, ShipTrafficLayerInfo } from '../../services/getAISLayersInfo';

import IMapView from 'esri/views/MapView';
import IPoint from 'esri/geometry/Point';
import IQueryTask from 'esri/tasks/QueryTask';
import IFeatureSet from 'esri/tasks/support/FeatureSet';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';
import { IFeature } from "@esri/arcgis-rest-types";
import { ActiveLayerTimeInfo } from '../../types';

enum ShipTrafficFeatureServiceFields {
    mmsi = 'mmsi',
    start_date  = 'start_date',
    end_date  = 'end_date',
    mean_sog  = 'mean_sog',
    mean_cog  = 'mean_cog',
    mean_heading  = 'mean_heading',
    vesselname  = 'vesselname',
    imo  = 'imo',
    // callsign  = 'callsign',
    vesseltype  = 'vesseltype',
    // status  = 'status',
    length  = 'length',
    width  = 'width',
    draft  = 'draft',
    // cargo  = 'cargo',
    vesselgroup  = 'vesselgroup',
    vesselclass  = 'vesselclass',
}

export type ShipTrafficFeatureAttributes = Record<ShipTrafficFeatureServiceFields, string>

export type ShipTrafficFeature = IFeature & {
    attributes: ShipTrafficFeatureAttributes
}

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo;
    onSelect: (feature:ShipTrafficFeature)=>void;
    mapView?: IMapView;
}

const ShipTrafficLayerQueryTask:React.FC<Props> = ({
    visibleSubLayer,
    activeLayerTimeInfo,
    onSelect,
    mapView
}) => {

    // const { visibleSubLayer, activeDate } = React.useContext(AppContext);

    const layerDataRef = useRef<ShipTrafficLayerInfo>();
    const visibleSubLayerRef = useRef<ShipTrafficSubLayerName>();

    const initEventListeners = ():void => {
        mapView.on('click', (event) => {
            queryFeatures(event.mapPoint);
        });
    };

    const queryFeatures = async (mapPoint:IPoint):Promise<void> => {
        // console.log(mapView.scale)

        type Modules = [typeof IQueryTask];

        try {
            const [ QueryTask] = await (loadModules([
                'esri/tasks/QueryTask'
            ]) as Promise<Modules>);

            const isVisible = isLayerInVisibleRange();

            if (isVisible && layerDataRef.current.Feature_Service) {

                const queryTask = new QueryTask({
                    url: layerDataRef.current.Feature_Service
                });

                const results:IFeatureSet = await queryTask.execute({
                    geometry: mapPoint,
                    distance: 50,
                    units: 'meters',
                    where: `${ShipTrafficFeatureServiceFields.vesselgroup} = '${visibleSubLayerRef.current}'`,
                    outFields : ['*'],
                    returnGeometry: true
                });

                const feature:ShipTrafficFeature = results.features[0] 
                    ? {
                        geometry: results.features[0].geometry,
                        attributes: results.features[0].attributes
                    } 
                    : null;

                onSelect(feature);
            }
        
        } catch(err){
            console.error(err);
        }

    };

    const isLayerInVisibleRange = ():boolean=>{
        return true;
    }

    useEffect(() => {
        if (mapView) {
            initEventListeners();
        }
    }, [mapView]);

    useEffect(()=>{
        
        (async()=>{
            layerDataRef.current = await getLayerDataByDate(activeLayerTimeInfo.year, activeLayerTimeInfo.month);
        })()
        
    }, [activeLayerTimeInfo]);

    useEffect(()=>{
        visibleSubLayerRef.current = visibleSubLayer;
    }, [visibleSubLayer]);

    return null;
}

export default ShipTrafficLayerQueryTask
