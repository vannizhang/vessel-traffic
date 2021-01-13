import React, {
    useRef,
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IFeatureLayer from 'esri/layers/FeatureLayer';

type Props = {
    isVisible: boolean;
    mapView?: IMapView;
}

const ITEM_ID = '096312c326b74d4eb10f99b33dfec5b4';

const NauticalBoundariesLayer:React.FC<Props> = ({
    isVisible,
    mapView
}) => {

    const layerRef = useRef<IFeatureLayer[]>();

    const show = async()=>{

        type Modules = [typeof IFeatureLayer ];

        if(!layerRef.current){

            try {
                const [ FeatureLayer ] = await (loadModules([
                    'esri/layers/FeatureLayer'
                ]) as Promise<Modules>);

                const shippingLanes = new FeatureLayer({
                    portalItem: {
                        id: ITEM_ID
                    },
                    layerId: 0,
                    minScale: 1155581
                })

                const shippingLaanchorageArea = new FeatureLayer({
                    portalItem: {
                        id: ITEM_ID
                    },
                    layerId: 1,
                    minScale: 1155581
                })

                const marinetimeLimits = new FeatureLayer({
                    portalItem: {
                        id: ITEM_ID
                    },
                    layerId: 2,
                    minScale: 1155581
                });

                layerRef.current = [ shippingLanes, shippingLaanchorageArea, marinetimeLimits ];

                mapView.map.addMany(layerRef.current, 0)

            } catch(err){

            }
        } else {
            mapView.map.addMany(layerRef.current, 0)
        }

    };

    const hide = ()=>{

        if(layerRef.current){
            layerRef.current.forEach(layer=>{
                mapView.map.remove(layer)
            })
        }

    };

    useEffect(()=>{

        if(!mapView){
            return;
        }

        isVisible ? show() : hide();

    }, [isVisible])

    return null;
}

export default NauticalBoundariesLayer;
