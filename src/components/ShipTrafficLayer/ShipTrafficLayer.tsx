import React from 'react';

// import {
//     AppContext
// } from '../../contexts/AppContextProvider';

import MapView from '@arcgis/core/views/MapView';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import { ShipTrafficLayerInfo, getLayerDataByDate } from '../../services/getAISLayersInfo';
import { ActiveLayerTimeInfo } from '../../types';

export type ShipTrafficSubLayerName = 'Cargo' | 'Fishing' | 'Military' | 'Passenger' | 'Pleasure' | 'Tanker' | 'Tow' | 'Other' | 'Not Available';

export const ShipTrafficSubLayerStyles: Record<ShipTrafficSubLayerName, {
    'text-color': string;
    'line-color': string;
    'background-color'?: string;
}> = {
    'Cargo': {
        'text-color': '#0BF25B',
        'line-color': 'rgba(11, 242, 91, .25)',
        'background-color': 'rgba(11, 242, 91, .25)'
    },
    'Fishing': {
        'text-color': '#0DB0FF',
        'line-color': 'rgba(13, 176, 255, .4)',
        'background-color': 'rgba(13, 176, 255, .8)'
    },
    'Military': {
        'text-color': '#FB0045',
        'line-color': '#FB0045',
        'background-color': '#FB0045'
    },
    'Passenger': {
        'text-color': '#8B00FD',
        'line-color': 'rgba(139,0,253, .35)',
        'background-color': 'rgba(139,0,253, .8)'
    },
    'Pleasure': {
        'text-color': '#FE0EDA',
        'line-color': 'rgba(254,14,218, .35)',
        'background-color': 'rgba(254,14,218, .8)'
    },
    'Tanker': {
        'text-color': '#FFE004',
        'line-color': 'rgba(255, 224, 4, .25)',
        'background-color': 'rgba(255, 224, 4, .8)'
    },
    'Tow': {
        'text-color': '#FF9A11',
        'line-color': 'rgba(255,154,17, .35)',
        'background-color': 'rgba(255,154,17, .8)'
    },
    'Other': {
        'text-color': '#fff',
        'line-color': 'rgba(255,255,255,.3)',
        'background-color': '#fff'
    },
    'Not Available': {
        'text-color': '#fff',
        'line-color': 'rgba(255,255,255,.3)',
        'background-color': '#fff'
    }
}

interface Props {
    mapView?: MapView;
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo;
    faded?: boolean;
}

const DEFAULT_EFFECT = 'bloom(1.5, 0.5px, 0.1)';
const GRAY_EFFECT = 'grayscale(90%)';

const ShipTrafficLayer:React.FC<Props> = ({
    mapView,
    visibleSubLayer,
    activeLayerTimeInfo,
    faded
})=>{

    // const { visibleSubLayer } = React.useContext(AppContext);

    // const [ shipTrafficLayer, setShipTrafficLayer ] = React.useState<IVectorTileLayer>();

    const shipTrafficLayerRef = React.useRef<VectorTileLayer>();

    const addLayer = async()=>{

        if(shipTrafficLayerRef.current){
            mapView.map.remove(shipTrafficLayerRef.current);
        }

        shipTrafficLayerRef.current = await getLayer();

        mapView.map.add(shipTrafficLayerRef.current);

    };

    const getStyle = ( layerInfo: ShipTrafficLayerInfo )=>{

        // const layerName = layerInfo.Layer_Name;

        // const layers = [
        //     'Cargo', 
        //     'Fishing', 
        //     'Military', 
        //     'Passenger', 
        //     'Pleasure', 
        //     'Tanker', 
        //     'Tow', 
        //     'Other'
        // ].map((sublayer:ShipTrafficSubLayerName, index) =>{

        //     const layout:any = {
        //         "line-cap": "butt",
        //         "line-join": "miter"
        //     };

        //     if(sublayer !== visibleSubLayer){
        //         layout["visibility"] = "none";
        //     }

        //     return {
        //         "id": `${layerName}/${sublayer}`,
        //         "type": "line",
        //         "source": "esri",
        //         "source-layer": layerName,
        //         "filter": [
        //             "==",
        //             "_symbol",
        //             index
        //         ],
        //         "layout": layout,
        //         "paint": {
        //             "line-color": ShipTrafficSubLayerStyles[sublayer]["line-color"],
        //             "line-width": 0.333333
        //         }
        //     }
        // });

        // return {
        //     "version": 8,
        //     "sources": {
        //         "esri": {
        //             "type": "vector",
        //             "url": layerInfo.Service_URL
        //         }
        //     },
        //     "layers": layers
        // };

        const SubLayerNames:ShipTrafficSubLayerName[] = [
            'Cargo', 
            'Fishing', 
            'Military', 
            'Passenger', 
            'Pleasure', 
            'Tanker', 
            'Tow', 
            'Other',
            'Not Available'
        ]

        const layers:any[] = []

        for(let index = 0; index < SubLayerNames.length; index++){

            const subLayerName = SubLayerNames[index];

            const color = ShipTrafficSubLayerStyles[subLayerName]["line-color"];

            const subLayerInfoBase ={
                "type": "line",
                "source": "esri",
                "filter": ["==", "_symbol",
                    index
                ],
                "layout": {
                    "line-cap": "butt",
                    "line-join": "miter",
                },
                "paint": {
                  "line-color": color,
                  "line-width": 0.333333
                }
            } as any

            if(subLayerName !== visibleSubLayer){
                subLayerInfoBase.layout["visibility"] = "none";
            }

            const subLayerInfo = {
                ...subLayerInfoBase,
                "id": "US_Vessel_Traffic/" + subLayerName,
                "source-layer": "US_Vessel_Traffic",
                "minzoom": 12.5305,
            }

            const generailizedSubLayerInfo = {
                ...subLayerInfoBase,
                "id": "US_Vessel_Traffic_gen/" + subLayerName,
                "source-layer": "US_Vessel_Traffic_gen",
                "maxzoom": 12.5305,
            }

            layers.push(subLayerInfo)
            layers.push(generailizedSubLayerInfo)
        }

        return {
            "version": 8,
            "sources": {
                "esri": {
                    "type": "vector",
                    "url": layerInfo.Service_URL
                }
            },
            "layers": layers
        };
    };

    const getLayer = async(): Promise<VectorTileLayer>=>{

        // type Modules = [typeof IVectorTileLayer];

        try {
            // const [ VectorTileLayer] = await (loadModules([
            //     'esri/layers/VectorTileLayer'
            // ]) as Promise<Modules>);

            // const activeYear = activeDate.getFullYear();
            // const activeMonth = activeDate.getMonth() + 1;

            // ShipTrafficLayersData.filter(d=>{
            //     return d.Year === activeYear && d.Month === activeMonth;
            // })[0];
            // console.log(layerInfo)

            const layerInfo = await getLayerDataByDate(activeLayerTimeInfo.year, activeLayerTimeInfo.month);
            // console.log('active ship layer info', layerInfo)

            // layerInfo.Layer_Name = 'US_Vessel_Traffic_2016_01'
            // layerInfo.Service_URL = 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_01_test/VectorTileServer'

            // layerInfo.Layer_Name = 'US_Vessel_Traffic_2016_01_gen500'
            // layerInfo.Service_URL = 'https://tiles.arcgis.com/tiles/P3ePLMYs2RVChkJx/arcgis/rest/services/US_Vessel_Traffic_2016_01_gen500/VectorTileServer'

            const style = getStyle(layerInfo);
            console.log(style)

            const layer = new VectorTileLayer({
                url: layerInfo.Service_URL,
                style,
                // effect: "bloom(1.5, 0.5px, 0.1)"
                effect: DEFAULT_EFFECT
            });

            // console.log(layerInfo.Service_URL, JSON.stringify(style))

            return layer;

        } catch(err){   
            return null;
        }
    };

    React.useEffect(()=>{

        if(mapView && visibleSubLayer){
            // console.log('visible sub layer on change', visibleSubLayer);
            addLayer();
        }

    }, [ visibleSubLayer, activeLayerTimeInfo, mapView ]);

    React.useEffect(()=>{

        if(shipTrafficLayerRef.current){
            shipTrafficLayerRef.current.effect = faded ? GRAY_EFFECT : DEFAULT_EFFECT;
            shipTrafficLayerRef.current.opacity = faded ? .5 : 1;
        }

    }, [ faded ]);

    return null;
};

export default ShipTrafficLayer;