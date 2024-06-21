import React, {
    useEffect,
    useRef
} from 'react';

import MapView from '@arcgis/core/views/MapView';
import Graphic from '@arcgis/core/Graphic';
import SimpleLineSymbol from '@arcgis/core/symbols/SimpleLineSymbol'
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';
import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer'

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    feature: ShipTrafficFeature;
    mapView?: MapView;
}

const ShipTrafficLayerQueryResult:React.FC<Props> = ({
    visibleSubLayer,
    feature,
    mapView
}) => {

    const visibleSubLayerRef = useRef<ShipTrafficSubLayerName>();

    const graphicRef = useRef<Graphic>();

    const showQueryResult = async():Promise<void>=>{

        if(graphicRef.current){
            mapView.graphics.remove(graphicRef.current);
        }

        if(!feature){
            return;
        }

        // type Modules = [typeof IGraphic, typeof ISimpleLineSymbol];

        try {

            // const [ Graphic, SimpleLineSymbol ] = await (loadModules([
            //     'esri/Graphic',
            //     'esri/symbols/SimpleLineSymbol'
            // ]) as Promise<Modules>);

            const {
                geometry
            } = feature;

            const styleInfo = ShipTrafficSubLayerStyles[visibleSubLayerRef.current]

            graphicRef.current = new Graphic({
                geometry, 
                symbol: new SimpleLineSymbol({
                    width: 2,
                    color: styleInfo['text-color']
                }),
            });

            mapView.graphics.add(graphicRef.current)

        } catch(err){
            console.error(err);
        }

    };

    useEffect(()=>{
        if(mapView){
            // mapView.graphics.removeAll();
            showQueryResult()
        }
        // console.log(feature);
    }, [feature]);

    useEffect(()=>{
        visibleSubLayerRef.current = visibleSubLayer;
    }, [visibleSubLayer]);

    return null;
}

export default ShipTrafficLayerQueryResult;
