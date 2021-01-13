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

            mapView.graphics.add(graphic)

        } catch(err){
            console.error(err);
        }

    };

    useEffect(()=>{
        if(mapView){
            mapView.graphics.removeAll();
            showQueryResult()
        }
        // console.log(feature);
    }, [data]);

    return null;
}

export default NauticalQueryResult;
