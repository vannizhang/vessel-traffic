import React, {
    useEffect,
    useRef
} from 'react';
import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IGraphic from 'esri/Graphic';

import { NauticalBoundariesLayerQueryResult, getNauticalLineSymbol, getNauticalPolygonSymbol } from '../NauticalBoundariesLayer/NauticalBoundariesLayer';
import { NAUTICAL_LAYER_HIGHLIGHT } from '../../constants/UI';

type Props = {
    data: NauticalBoundariesLayerQueryResult;
    mapView?: IMapView;
}

const NauticalQueryResult:React.FC<Props> = ({
    data,
    mapView
}) => {

    const graphicRef = useRef<IGraphic>();

    const showQueryResult = async():Promise<void>=>{

        if(!data){
            return;
        }

        type Modules = [typeof IGraphic];

        try {

            const [ Graphic ] = await (loadModules([
                'esri/Graphic'
            ]) as Promise<Modules>);

            const {
                graphic
            } = data;

            graphic.symbol = graphic.geometry.type === 'polygon' 
                ? await getNauticalPolygonSymbol(NAUTICAL_LAYER_HIGHLIGHT)
                : await getNauticalLineSymbol(NAUTICAL_LAYER_HIGHLIGHT, 2)

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
