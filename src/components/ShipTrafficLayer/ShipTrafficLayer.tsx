import React from 'react';

import { loadModules } from 'esri-loader';

import {
    AppContext
} from '../../contexts/AppContextProvider';

import IMapView from 'esri/views/MapView';
import IVectorTileLayer from 'esri/layers/VectorTileLayer';
import { ShipTrafficLayerInfo, getLayerDataByDate } from '../../services/getAISLayersInfo';
import { ActiveLayerTimeInfo } from '../../types';

export type ShipTrafficSubLayerName = 'Cargo' | 'Fishing' | 'Military' | 'Passenger' | 'Pleasure' | 'Tanker' | 'Tow' | 'Other';

export const ShipTrafficSubLayerStyles: Record<ShipTrafficSubLayerName, {
    'text-color': string;
    'line-color': string;
}> = {
    'Cargo': {
        'text-color': '#0BF25B',
        'line-color': 'rgba(11, 242, 91, .25)'
    },
    'Fishing': {
        'text-color': '#0DB0FF',
        'line-color': 'rgba(13, 176, 255, .4)'
    },
    'Military': {
        'text-color': '#FB0045',
        'line-color': '#FB0045'
    },
    'Passenger': {
        'text-color': '#8B00FD',
        'line-color': 'rgba(139,0,253, .35)'
    },
    'Pleasure': {
        'text-color': '#FE0EDA',
        'line-color': 'rgba(254,14,218, .35)'
    },
    'Tanker': {
        'text-color': '#FFE004',
        'line-color': 'rgba(255, 224, 4, .25)'
    },
    'Tow': {
        'text-color': '#FF9A11',
        'line-color': 'rgba(255,154,17, .35)'
    },
    'Other': {
        'text-color': '#686868',
        'line-color': '#686868'
    }
}

interface Props {
    mapView?: IMapView;
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo;
}

const ShipTrafficLayer:React.FC<Props> = ({
    mapView,
    visibleSubLayer,
    activeLayerTimeInfo
})=>{

    // const { visibleSubLayer } = React.useContext(AppContext);

    const [ shipTrafficLayer, setShipTrafficLayer ] = React.useState<IVectorTileLayer>();

    const addLayer = async()=>{

        if(shipTrafficLayer){
            mapView.map.remove(shipTrafficLayer);
        }

        const layer = await getLayer();

        mapView.map.add(layer);

        setShipTrafficLayer(layer);
    };

    const getStyle = ( layerInfo: ShipTrafficLayerInfo )=>{

        const layerName = layerInfo.Layer_Name;

        const layers = [
            'Cargo', 
            'Fishing', 
            'Military', 
            'Passenger', 
            'Pleasure', 
            'Tanker', 
            'Tow', 
            'Other'
        ].map((sublayer:ShipTrafficSubLayerName, index) =>{

            const layout = {
                "line-cap": "round",
                "line-join": "round"
            };

            if(sublayer !== visibleSubLayer){
                layout["visibility"] = "none";
            }

            return {
                "id": `${layerName}/${sublayer}`,
                "type": "line",
                "source": "esri",
                "source-layer": layerName,
                "filter": [
                    "==",
                    "_symbol",
                    index
                ],
                "layout": layout,
                "paint": {
                    "line-color": ShipTrafficSubLayerStyles[sublayer]["line-color"],
                    "line-width": 0.333333
                }
            }
        });

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

    const getLayer = async(): Promise<IVectorTileLayer>=>{

        type Modules = [typeof IVectorTileLayer];

        try {
            const [ VectorTileLayer] = await (loadModules([
                'esri/layers/VectorTileLayer'
            ]) as Promise<Modules>);

            // const activeYear = activeDate.getFullYear();
            // const activeMonth = activeDate.getMonth() + 1;

            // ShipTrafficLayersData.filter(d=>{
            //     return d.Year === activeYear && d.Month === activeMonth;
            // })[0];
            // console.log(layerInfo)

            const layerInfo = await getLayerDataByDate(activeLayerTimeInfo.year, activeLayerTimeInfo.month);
            // console.log('active ship layer info', layerInfo)

            const style = getStyle(layerInfo);
            // console.log(style)

            const layer = new VectorTileLayer({
                url: layerInfo.Service_URL,
                style,
                // effect: "bloom(1.5, 0.5px, 0.1)"
                effect: "bloom(1.5, 0.5px, 0.1)"
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

    return null;
};

export default ShipTrafficLayer;