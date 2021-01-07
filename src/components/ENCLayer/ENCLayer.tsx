import React, {
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';

import IMapView from 'esri/views/MapView';
import IFeatureLayer from 'esri/layers/FeatureLayer';
import IFeatureLayerView from 'esri/views/layers/FeatureLayerView';
import { NOAAENCsLevel } from '../../types';
import { IGeometry } from '@esri/arcgis-rest-feature-layer';

type ENCLayerFields = 'Type' | 'Name' | 'File_' | 'Note';

export type ENCLayerFeature = {
    attributes: Record<ENCLayerFields, string>;
    geometry?: IGeometry;
};

const ITEM_ID = '4ed0b58d07f8481db248faeccfdb7714';

type Props = {
    level: NOAAENCsLevel;
    visible: boolean;
    mapView?: IMapView;
    onSelect: (feature:ENCLayerFeature)=>void;
}

const ENCLayer:React.FC<Props> = ({
    level,
    visible,
    mapView,
    onSelect
}) => {

    const layerRef = React.useRef<IFeatureLayer>();

    const layerViewRef = React.useRef<IFeatureLayerView>()

    const getDefExp = ()=>{
        return `Type = '${level}' AND Note is null`
    }

    const init = async()=>{

        type Modules = [typeof IFeatureLayer ];

        try {

            const [ FeatureLayer ] = await (loadModules([
                'esri/layers/FeatureLayer'
            ]) as Promise<Modules>);

            const layer = new FeatureLayer({
                portalItem: {
                    id: ITEM_ID
                },
                outFields: ['Name', 'Type', 'File_'],
                definitionExpression: getDefExp(),
                popupEnabled: false,
                opacity: .75
            });

            mapView.map.add(layer);

            mapView.whenLayerView(layer).then((layerView)=>{
                layerViewRef.current = layerView;
                initClickEvtHandler();
            });

            layerRef.current = layer;

        } catch(err){
            console.error(err);
        }
    };

    const initClickEvtHandler = ()=>{
        mapView.on('click', async(evt)=>{

            const res = await layerViewRef.current.queryFeatures({
                geometry: evt.mapPoint,
                spatialRelationship: 'intersects',
                outFields: ['Name', 'Type', 'File_'],
                returnGeometry: true
            });

            if(res.features && res.features[0]){

                const {
                    attributes,
                    geometry
                } = res.features[0];

                console.log(res.features[0])

                onSelect({
                    attributes,
                    geometry
                })
            }

            // console.log(res.features);
        })
    }

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
            // layerRef.current.refresh()
        }

    }, [level])
    
    return null;

}

export default ENCLayer
