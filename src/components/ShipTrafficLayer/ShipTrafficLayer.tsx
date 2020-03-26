import * as React from 'react';

import { loadModules } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IVectorTileLayer from 'esri/layers/VectorTileLayer';

export type ShipTrafficLayerName = 'Cargo' | 'Fishing' | 'Military' | 'Passenger' | 'Passenger' | 'Pleasure' | 'Tanker' | 'Tow' | 'Other';

interface Props {
    mapView?: IMapView;
}

const ShipTrafficLayer:React.FC<Props> = ({
    mapView
})=>{

    const addLayer = async()=>{
        const layer = await getLayer();
        mapView.map.add(layer);
    };

    const getStyle = ({
        url = '',
        sourceLayerName = '',
        visibleLayer 
    }: {
        url: string,
        sourceLayerName: string,
        visibleLayer: ShipTrafficLayerName
    })=>{
        return {
            "version": 8,
            "sources": {
                "esri": {
                    "type": "vector",
                    "url": url
                }
            },
            "layers": [
                {
                    "id": "U.S. Vessel Traffic - August 2017/Cargo",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        0
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        // "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#4CE600",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Fishing",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        1
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#0070FF",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Military",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        2
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#FF0000",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Passenger",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        3
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#C500FF",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Pleasure",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        4
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#FF73DF",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Tanker",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        5
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#FFFF00",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Tow",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        6
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#FFAA00",
                        "line-width": 0.333333
                    }
                },
                {
                    "id": "U.S. Vessel Traffic - August 2017/Other",
                    "type": "line",
                    "source": "esri",
                    "source-layer": "U.S. Vessel Traffic - August 2017",
                    "filter": [
                        "==",
                        "_symbol",
                        7
                    ],
                    "layout": {
                        "line-cap": "round",
                        "line-join": "round",
                        "visibility": "none"
                    },
                    "paint": {
                        "line-color": "#686868",
                        "line-width": 0.333333
                    }
                }
            ]
        };
    };

    const getLayer = async(): Promise<IVectorTileLayer>=>{

        type Modules = [typeof IVectorTileLayer];

        try {
            const [ VectorTileLayer] = await (loadModules([
                'esri/layers/VectorTileLayer'
            ]) as Promise<Modules>);

            const layer = new VectorTileLayer({
                url: 'https://tiles.arcgis.com/tiles/bDAhvQYMG4WL8O5o/arcgis/rest/services/U_S__Vessel_Traffic___August_2017/VectorTileServer',
                style: {
                    "version": 8,
                    // "sprite": "../sprites/sprite",
                    // "glyphs": "../fonts/{fontstack}/{range}.pbf",
                    "sources": {
                        "esri": {
                            "type": "vector",
                            "url": "https://tiles.arcgis.com/tiles/bDAhvQYMG4WL8O5o/arcgis/rest/services/U_S__Vessel_Traffic___August_2017/VectorTileServer"
                        }
                    },
                    "layers": [
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Cargo",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                0
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                // "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#4CE600",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Fishing",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                1
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#0070FF",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Military",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                2
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#FF0000",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Passenger",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                3
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#C500FF",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Pleasure",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                4
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#FF73DF",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Tanker",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                5
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#FFFF00",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Tow",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                6
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#FFAA00",
                                "line-width": 0.333333
                            }
                        },
                        {
                            "id": "U.S. Vessel Traffic - August 2017/Other",
                            "type": "line",
                            "source": "esri",
                            "source-layer": "U.S. Vessel Traffic - August 2017",
                            "filter": [
                                "==",
                                "_symbol",
                                7
                            ],
                            "layout": {
                                "line-cap": "round",
                                "line-join": "round",
                                "visibility": "none"
                            },
                            "paint": {
                                "line-color": "#686868",
                                "line-width": 0.333333
                            }
                        }
                    ]
                }
            });

            return layer;

        } catch(err){   
            return null;
        }
    }

    React.useEffect(()=>{

        if(mapView){
            addLayer();
        }

    }, [ mapView ])

    return null;
};

export default ShipTrafficLayer;