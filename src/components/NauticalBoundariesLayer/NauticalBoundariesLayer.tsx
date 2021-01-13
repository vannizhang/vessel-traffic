import React, {
    useRef,
    useEffect
} from 'react'

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IFeatureLayer from 'esri/layers/FeatureLayer';
import IGraphic from 'esri/Graphic';

type NauticalBoundariesLayerTitle = 'shipping lane' | 'anchorage area' | 'maritime limit';

export type NauticalBoundariesLayerQueryResult = {
    layerName: NauticalBoundariesLayerTitle;
    graphic: IGraphic,
}

type Props = {
    isVisible: boolean;
    mapView?: IMapView;
    queryResultOnSelected: (data:NauticalBoundariesLayerQueryResult)=>void;
}

const ITEM_ID = '096312c326b74d4eb10f99b33dfec5b4';
const MIN_SCALE = 1155581;

const NauticalRefLayerNames:NauticalBoundariesLayerTitle[] = [
    'shipping lane', 'anchorage area', 'maritime limit'
];

const NauticalBoundariesLayer:React.FC<Props> = ({
    isVisible,
    mapView,
    queryResultOnSelected
}) => {

    const layerRef = useRef<IFeatureLayer[]>();

    const isVisibleRef = useRef<boolean>(isVisible);

    const show = async()=>{

        type Modules = [typeof IFeatureLayer ];

        if(!layerRef.current){

            try {
                const [ FeatureLayer ] = await (loadModules([
                    'esri/layers/FeatureLayer'
                ]) as Promise<Modules>);


                layerRef.current = NauticalRefLayerNames.map((title, index)=>{
                    return new FeatureLayer({
                        portalItem: {
                            id: ITEM_ID
                        },
                        layerId: index,
                        minScale: MIN_SCALE,
                        outFields: ['*'],
                        title
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

    useEffect(()=>{

        if(!mapView){
            return;
        }

        isVisibleRef.current = isVisible;

        isVisible ? show() : hide();

    }, [isVisible])

    return null;
}

export default NauticalBoundariesLayer;
