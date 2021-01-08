import React, {
    useEffect,
    useRef
} from 'react'

import { loadModules } from 'esri-loader';

import IMapView from 'esri/views/MapView';
import IGraphic from 'esri/Graphic'
import IFeatureLayer from 'esri/layers/FeatureLayer';
import IGraphicLayer from 'esri/layers/GraphicsLayer';
import IFeatureLayerView from 'esri/views/layers/FeatureLayerView';
import ISimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';
import { NOAAENCsLevel } from '../../types';
import { IGeometry } from '@esri/arcgis-rest-feature-layer';
import { BACKGROUND_COLOR } from '../../constants/UI';

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

    const layerViewRef = React.useRef<IFeatureLayerView>();

    // will be used to show graphic for the highlight feature on mouse hover event
    const graphicsLayerRef = React.useRef<IGraphicLayer>();

    const mouseMoveDelay = useRef<number>();

    const getDefExp = ()=>{
        return `Type = '${level}' AND Note is null`
    }

    const init = async()=>{

        type Modules = [typeof IFeatureLayer, typeof IGraphicLayer ];

        try {

            const [ FeatureLayer, GraphicsLayer ] = await (loadModules([
                'esri/layers/FeatureLayer',
                'esri/layers/GraphicsLayer'
            ]) as Promise<Modules>);

            const layer = new FeatureLayer({
                portalItem: {
                    id: ITEM_ID
                },
                outFields: ['Name', 'Type', 'File_'],
                definitionExpression: getDefExp(),
                popupEnabled: false,
                opacity: .75,
                visible
            });

            mapView.map.add(layer);

            mapView.whenLayerView(layer).then((layerView)=>{
                layerViewRef.current = layerView;
                initEvtHandlers();
            });

            layerRef.current = layer;

            const gLayer = new GraphicsLayer({
                effect: 'blur(4px)'
            });

            mapView.map.add(gLayer, 0);

            graphicsLayerRef.current = gLayer;

        } catch(err){
            console.error(err);
        }
    };

    const queryFeature = async(geometry:__esri.Point):Promise<IGraphic>=>{

        const res = await layerViewRef.current.queryFeatures({
            geometry,
            spatialRelationship: 'intersects',
            outFields: ['Name', 'Type', 'File_'],
            returnGeometry: true
        });

        return res?.features[0]

    }

    const isLayerVisible = ()=>{
        return layerRef.current && layerRef.current.visible;
    }

    const toggleFeatureOnHover = async(graphic?:IGraphic)=>{
        type Modules = [typeof ISimpleFillSymbol ];

        if(!graphicsLayerRef.current){
            return;
        }

        graphicsLayerRef.current.removeAll();

        if(graphic){

            const [ SimpleFillSymbol ] = await (loadModules([
                'esri/symbols/SimpleFillSymbol'
            ]) as Promise<Modules>);

            graphic.symbol = new SimpleFillSymbol({
                style: 'none',
                outline: {  // autocasts as new SimpleLineSymbol()
                    color: BACKGROUND_COLOR,
                    width: 5
                }
            })

            graphicsLayerRef.current.add(graphic)
        }
    }

    const initEvtHandlers = ()=>{
        mapView.on('click', async(evt)=>{
            
            if(isLayerVisible()){

                const feature = await queryFeature(evt.mapPoint);
                // console.log(feature)

                if(feature){
    
                    const {
                        attributes,
                        geometry
                    } = feature;
        
                    onSelect({
                        attributes,
                        geometry
                    });
                };
            }

        });

        mapView.on('pointer-move', (evt) => {

            if(isLayerVisible()){

                clearTimeout(mouseMoveDelay.current);

                mouseMoveDelay.current = window.setTimeout(async () => {
    
                    const pointerGeometry = mapView.toMap(evt)
    
                    const feature = await queryFeature(pointerGeometry);

                    toggleFeatureOnHover(feature)

                    // console.log(feature)
                }, 50);
            }
        });

        mapView.on('pointer-out', (evt) => {
            toggleFeatureOnHover()
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
