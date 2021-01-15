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

export type ShipLayerQueryResult = {
    feature: ShipTrafficFeature;
    queryGeometry: IPoint;
}

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo;
    defaultQueryPoint?: [number, number] // lon, lat
    onSelect: (result:ShipLayerQueryResult)=>void;
    mapView?: IMapView;
}

const ShipTrafficLayerQueryTask:React.FC<Props> = ({
    visibleSubLayer,
    activeLayerTimeInfo,
    defaultQueryPoint,
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

    const queryFeatures = async (queryGeometry?:IPoint):Promise<void> => {
        // console.log(mapView.scale)

        type Modules = [typeof IQueryTask];

        try {
            const [ QueryTask] = await (loadModules([
                'esri/tasks/QueryTask'
            ]) as Promise<Modules>);

            if (layerDataRef.current.Feature_Service) {

                const queryTask = new QueryTask({
                    url: layerDataRef.current.Feature_Service
                });

                const distance = mapView.zoom < 12 ? 100 : 50;

                const results:IFeatureSet= await queryTask.execute({
                    geometry: queryGeometry,
                    distance,
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

                const queryResult = feature 
                    ? {
                        feature,
                        queryGeometry
                    } 
                    : undefined;

                onSelect(queryResult);
            }
        
        } catch(err){
            console.error(err);
        }

    };

    useEffect(() => {
        if (mapView) {
            initEventListeners();

            if(defaultQueryPoint){
                (async()=>{

                    type Modules = [typeof IPoint];

                    const [ Point ] = await (loadModules([
                        'esri/geometry/Point'
                    ]) as Promise<Modules>);

                    const [ longitude, latitude ] = defaultQueryPoint;

                    const defaultQueryPointGeom = new Point({
                        longitude, 
                        latitude
                    });

                    queryFeatures(defaultQueryPointGeom)
                })();
            }
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
