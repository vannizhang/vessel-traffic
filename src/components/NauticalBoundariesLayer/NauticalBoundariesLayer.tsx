import React, {
    useRef,
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IFeatureLayer from 'esri/layers/FeatureLayer';
import IGraphic from 'esri/Graphic';
import ISimpleFillSymbol from 'esri/symbols/SimpleFillSymbol';
import ISimpleLineSymbol from 'esri/symbols/SimpleLineSymbol';
import IwatchUtils from 'esri/core/watchUtils';
import { NAUTICAL_LAYER_FILL, NAUTICAL_LAYER_LINE } from '../../constants/UI';

type NauticalBoundariesLayerTitle = 'shipping lane' | 'anchorage area' | 'maritime limit';

export type NauticalBoundariesLayerQueryResult = {
    layerName: NauticalBoundariesLayerTitle;
    graphic: IGraphic,
}

type Props = {
    isVisible: boolean;
    mapView?: IMapView;
    isInVisibleScaleOnChange: (isInVisibleScale:boolean)=>void;
    queryResultOnSelected: (data:NauticalBoundariesLayerQueryResult)=>void;
}

const ITEM_ID = '096312c326b74d4eb10f99b33dfec5b4';
const MIN_SCALE = 1155581;

const NauticalRefLayerNames:NauticalBoundariesLayerTitle[] = [
    'shipping lane', 'anchorage area', 'maritime limit'
];

export const getNauticalPolygonSymbol = async(fillColor?:string)=>{

    type Modules = [typeof ISimpleFillSymbol];

    const [ SimpleFillSymbol] = await (loadModules([
        'esri/symbols/SimpleFillSymbol',
    ]) as Promise<Modules>);

    const PolygonSymbol = new SimpleFillSymbol({
        color: fillColor || NAUTICAL_LAYER_FILL,
        outline: {  // autocasts as new SimpleLineSymbol()
            color: NAUTICAL_LAYER_LINE,
            width: 1,
        }
    });

    return PolygonSymbol;
}

export const getNauticalLineSymbol = async({
    lineColor, lineWidth, isDashed
}:{
    lineColor?:string, lineWidth?:number, isDashed?:boolean
})=>{
    type Modules = [typeof ISimpleLineSymbol ];

    const [ SimpleLineSymbol ] = await (loadModules([
        'esri/symbols/SimpleLineSymbol'
    ]) as Promise<Modules>);

    const LineSymbol = new SimpleLineSymbol({
        color: lineColor || NAUTICAL_LAYER_LINE,
        width: lineWidth || 1,
        style: isDashed ? 'dash' : 'solid'
    });

    return LineSymbol;
}

const NauticalBoundariesLayer:React.FC<Props> = ({
    isVisible,
    mapView,
    isInVisibleScaleOnChange,
    queryResultOnSelected
}) => {

    const layerRef = useRef<IFeatureLayer[]>();

    const isVisibleRef = useRef<boolean>(isVisible);

    const show = async()=>{

        type Modules = [typeof IFeatureLayer, typeof ISimpleFillSymbol, typeof ISimpleLineSymbol ];

        if(!layerRef.current){

            try {
                const [ FeatureLayer ] = await (loadModules([
                    'esri/layers/FeatureLayer',
                    'esri/symbols/SimpleFillSymbol',
                    'esri/symbols/SimpleLineSymbol'
                ]) as Promise<Modules>);

                const PolygonSymbol = await getNauticalPolygonSymbol();

                const LineSymbol = await getNauticalLineSymbol({
                    isDashed: true
                });

                layerRef.current = NauticalRefLayerNames.map((title, index)=>{
                    return new FeatureLayer({
                        portalItem: {
                            id: ITEM_ID
                        },
                        layerId: index,
                        minScale: MIN_SCALE,
                        outFields: ['*'],
                        title,
                        renderer: {
                            type: 'simple',
                            symbol: title === 'maritime limit' ?  LineSymbol : PolygonSymbol
                        } as any
                    })
                })

                mapView.map.addMany(layerRef.current, 0);

                initClickEvent();

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

    const initClickEvent = ()=>{
        // Get the screen point from the view's click event
        mapView.on("click",  async(event)=>{

            if(isVisibleRef.current){

                const response = await mapView.hitTest(event);
                // console.log(response)

                if (response.results.length) {

                    const result = response.results.filter((result)=>{
                        // check if the graphic belongs to the layer of interest
                        return layerRef.current.indexOf(result.graphic.layer as any) > -1;
                    })[0];

                    if(result){
                        // do something with the result graphic
                        // console.log(result.graphic);

                        const queryResult:NauticalBoundariesLayerQueryResult = {
                            layerName: result.graphic.layer.title as NauticalBoundariesLayerTitle,
                            graphic: result.graphic
                        } 

                        queryResultOnSelected(queryResult);
                    }

                }
            }
        });
    }

    const addWatchEvent = async () => {
        type Modules = [typeof IwatchUtils];

        try {
            const [watchUtils] = await (loadModules([
                'esri/core/watchUtils',
            ]) as Promise<Modules>);

            watchUtils.whenTrue(mapView, 'stationary', () => {
                // console.log('mapview is stationary', mapView.center, mapView.zoom);

                const isInVisibleScale = mapView.scale < MIN_SCALE;

                isInVisibleScaleOnChange(isInVisibleScale)

                // console.log(isInVisibleScale);

            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(()=>{

        if(!mapView){
            return;
        }

        isVisibleRef.current = isVisible;

        isVisible ? show() : hide();

    }, [isVisible]);

    useEffect(()=>{
        if(mapView){
            addWatchEvent()
        }
    }, [mapView])

    return null;
}

export default NauticalBoundariesLayer;
