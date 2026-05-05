/* Copyright 2026 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

    const visibleSubLayerRef = useRef<ShipTrafficSubLayerName>(null);

    const graphicRef = useRef<Graphic>(null);

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

            const geometry = feature.geometry as any;
            // console.log(geometry)

            const styleInfo = ShipTrafficSubLayerStyles[visibleSubLayerRef.current]

            graphicRef.current = new Graphic({
                geometry: {
                    type: "polyline",
                    paths: geometry.paths,
                } as any, 
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
