import * as React from 'react';

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
    'line-color': string
}> = {
    'Cargo': {
        'line-color': '#0BF25B'
    },
    'Fishing': {
        'line-color': '#0DB0FF'
    },
    'Military': {
        'line-color': '#FB0045'
    },
    'Passenger': {
        'line-color': '#8B00FD'
    },
    'Pleasure': {
        'line-color': '#FE0EDA'
    },
    'Tanker': {
        'line-color': '#FFE004'
    },
    'Tow': {
        'line-color': '#FF9A11'
    },
    'Other': {
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
            console.log('active ship layer info', layerInfo)

            const style = getStyle(layerInfo);
            // console.log(style)

            const layer = new VectorTileLayer({
                url: layerInfo.Service_URL,
                style
            });

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