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

import { NauticalBoundariesLayerQueryResult, getNauticalLineSymbol, getNauticalPolygonSymbol } from '../NauticalBoundariesLayer/NauticalBoundariesLayer';
import { NAUTICAL_LAYER_COLOR, NAUTICAL_LAYER_HIGHLIGHT } from '../../constants/UI';

type Props = {
    data: NauticalBoundariesLayerQueryResult;
    mapView?: MapView;
}

const NauticalQueryResult:React.FC<Props> = ({
    data,
    mapView
}) => {

    const graphicRef = useRef<Graphic>(null);

    const showQueryResult = async():Promise<void>=>{

        if(!data){
            return;
        }

        // type Modules = [typeof IGraphic];

        try {

            // const [ Graphic ] = await (loadModules([
            //     'esri/Graphic'
            // ]) as Promise<Modules>);

            const {
                graphic
            } = data;

            graphic.symbol = graphic.geometry.type === 'polygon' 
                ? await getNauticalPolygonSymbol(NAUTICAL_LAYER_HIGHLIGHT)
                : await getNauticalLineSymbol({
                    lineColor: NAUTICAL_LAYER_COLOR,
                    lineWidth: 2
                })

            graphicRef.current = graphic;

            mapView.graphics.add(graphicRef.current);

        } catch(err){
            console.error(err);
        }

    };

    const clear = ()=>{

        if(graphicRef.current){
            mapView.graphics.remove(graphicRef.current);
        }
    }

    useEffect(()=>{
        if(mapView){
            clear();
            showQueryResult()
        }
        // console.log(feature);
    }, [data]);

    return null;
}

export default NauticalQueryResult;
