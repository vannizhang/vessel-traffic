import React, {
    useRef,
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IVectorTileLayer from 'esri/layers/VectorTileLayer';

type Props = {
    isVisible: boolean;
    mapView?: IMapView;
}

const NauticalBoundariesLayer:React.FC<Props> = ({
    isVisible,
    mapView
}) => {

    const layerRef = useRef<IVectorTileLayer>();

    const show = async()=>{

        // if()

    };

    const hide = ()=>{

    };

    useEffect(()=>{

        if(!mapView){
            return;
        }

    }, [isVisible])

    return null;
}

export default NauticalBoundariesLayer;
