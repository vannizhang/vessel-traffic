import * as React from 'react';

import { loadModules } from 'esri-loader';

import {
    AppContext
} from '../../contexts/AppContextProvider';

import { ShipTrafficLayersData, ShipTrafficLayerInfo } from './data';

import IMapView from 'esri/views/MapView';
import IVectorTileLayer from 'esri/layers/VectorTileLayer';

export type ShipTrafficSubLayerName = 'Cargo' | 'Fishing' | 'Military' | 'Passenger' | 'Pleasure' | 'Tanker' | 'Tow' | 'Other';

export const ShipTrafficSubLayerStyles: {
    [ key in ShipTrafficSubLayerName] : {
        'line-color': string;
    }
} = {
    'Cargo': {
        'line-color': '#4CE600'
    },
    'Fishing': {
        'line-color': '#0070FF'
    },
    'Military': {
        'line-color': '#FF0000'
    },
    'Passenger': {
        'line-color': '#C500FF'
    },
    'Pleasure': {
        'line-color': '#FF73DF'
    },
    'Tanker': {
        'line-color': '#FFFF00'
    },
    'Tow': {
        'line-color': '#FFAA00'
    },
    'Other': {
        'line-color': '#686868'
    }
}

interface Props {
    mapView?: IMapView;
}

const ShipTrafficLayer:React.FC<Props> = ({
    mapView
})=>{

    const { visibleSubLayer } = React.useContext(AppContext);

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

            const layerInfo = ShipTrafficLayersData[0];

            const style = getStyle(layerInfo);

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

        if(mapView){
            addLayer();
        }

    }, [ mapView ]);

    React.useEffect(()=>{

        if(mapView){
            // console.log('visible sub layer on change', visibleSubLayer);
            addLayer();
        }

    }, [ visibleSubLayer ]);

    return null;
};

export default ShipTrafficLayer;