import React, {
    useEffect
} from 'react';
import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IGraphic from 'esri/Graphic';
import ISimpleLineSymbol from 'esri/symbols/SimpleLineSymbol'
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';

type Props = {
    feature: ShipTrafficFeature;
    mapView?: IMapView;
}

const ShipTrafficLayerQueryResult:React.FC<Props> = ({
    feature,
    mapView
}) => {

    const showQueryResult = async():Promise<void>=>{

        if(!feature){
            return;
        }

        type Modules = [typeof IGraphic, typeof ISimpleLineSymbol];

        try {

            const [ Graphic, SimpleLineSymbol ] = await (loadModules([
                'esri/Graphic',
                'esri/symbols/SimpleLineSymbol'
            ]) as Promise<Modules>);

            const {
                geometry
            } = feature

            const graphic4QueryResult = new Graphic({
                geometry, 
                symbol: new SimpleLineSymbol({
                    width: 2,
                    color: [0,255,255]
                })
            });

            mapView.graphics.add(graphic4QueryResult)

        } catch(err){
            console.error(err);
        }

    };

    useEffect(()=>{
        if(mapView){
            mapView.graphics.removeAll();
            showQueryResult()
        }
    }, [feature]);

    return null;
}

export default ShipTrafficLayerQueryResult;
