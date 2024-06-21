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

    const graphicRef = useRef<Graphic>();

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
