import React, {
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';

import IMapView from 'esri/views/MapView';
import IFeatureLayer from 'esri/layers/FeatureLayer';
import { NOAAENCsLevel } from '../../types';

type ENCLayerFields = 'Type' | 'Name' | 'File_' | 'Note';

export type ENCLayerFeature = {
    attributes: Record<ENCLayerFields, string>
};

const ITEM_ID = '4ed0b58d07f8481db248faeccfdb7714';

type Props = {
    level: NOAAENCsLevel;
    visible: boolean;
    mapView?: IMapView;
}

const ENCLayer:React.FC<Props> = ({
    level,
    visible,
    mapView
}) => {

    const layerRef = React.useRef<IFeatureLayer>()

    const getDefExp = ()=>{
        return `Type = '${level}' AND Note is null`
    }

    const init = async()=>{

        type Modules = [typeof IFeatureLayer ];

        try {

            const [ FeatureLayer ] = await (loadModules([
                'esri/layers/FeatureLayer'
            ]) as Promise<Modules>);

            layerRef.current = new FeatureLayer({
                portalItem: {
                    id: ITEM_ID
                },
                fields: ['Name', 'Type', 'File_'],
                definitionExpression: getDefExp(),
                popupEnabled: false
            });

            mapView.map.add(layerRef.current)

        } catch(err){
            console.error(err);
        }
    };

    useEffect(()=>{

        if(mapView){
            init();
        }

    }, [mapView]);

    useEffect(()=>{

        if(layerRef.current){
            layerRef.current.visible = visible;
        }

    }, [visible])

    useEffect(()=>{

        if(layerRef.current){
            layerRef.current.definitionExpression = getDefExp();
        }

    }, [level])
    
    return null;

}

export default ENCLayer
