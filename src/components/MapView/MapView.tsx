import * as React from 'react';

import ArcGISMapView from '@arcgis/core/views/MapView';
import Map from "@arcgis/core/Map";
import { watch } from '@arcgis/core/core/reactiveUtils';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Compass from '@arcgis/core/widgets/Compass';
import Home from '@arcgis/core/widgets/Home';
// import MapImageLayer from '@arcgis/core/layers/MapImageLayer'

import { BACKGROUND_COLOR } from '../../constants/UI';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

export type MapCenterLocation = {
    lat: number;
    lon: number;
    zoom: number;
}

interface Props {
    // webmapId: string;
    defaultMapCenterLocation?: MapCenterLocation;
    onStationary: (centerLocation:MapCenterLocation)=>void;
    // paddingRight?: number;
    // bookmark?: BookmarkData;
    children:React.ReactNode
};

const MapView:React.FC<Props> = ({
    // webmapId,
    defaultMapCenterLocation,
    onStationary,
    // paddingRight = 0,
    // bookmark,
    children
})=>{

    const mapDivRef = React.useRef<HTMLDivElement>();

    // const { mapCenterLocation, setMapCenterLocation } = React.useContext(AppContext);

    const [ mapView, setMapView] = React.useState<ArcGISMapView>(null);

    const initMapView = async()=>{
        
        // type Modules = [
        //     typeof IMapView, 
        //     typeof IMap,
        //     typeof ITileLayer,
        //     typeof IVectorTileLayer,
        //     typeof IMapImageLayer,
        //     typeof ICompass,
        //     typeof IHome
        // ];

        try {
            // const [ 
            //     MapView, 
            //     Map,
            //     TileLayer,
            //     VectorTileLayer,
            //     MapImageLayer,
            //     Compass,
            //     Home
            // ] = await (loadModules([
            //     'esri/views/MapView',
            //     'esri/Map',
            //     'esri/layers/TileLayer',
            //     'esri/layers/VectorTileLayer',
            //     'esri/layers/MapImageLayer',
            //     'esri/widgets/Compass',
            //     'esri/widgets/Home'
            // ]) as Promise<Modules>);

            // const referenceLayer = new VectorTileLayer({
            //     portalItem: {
            //         id: "4d79f7a4844b46d385e5d69d1a9da08c" // World Terrain Reference (Local Language)
            //     },
            //     opacity: .5,
            //     minScale: 288895
            // })

            // const referenceLayer = new MapImageLayer({
            //     url: 'https://services.arcgisonline.com/arcgis/rest/services/Ocean/World_Ocean_Reference/MapServer',
            //     opacity: 1,
            //     // minScale: 288895
            // })


            const map = new Map({
                // layers: [
                //     referenceLayer
                // ],
                basemap: {
                    baseLayers: [
                        new TileLayer({
                            portalItem: {
                                id: "a66bfb7dd3b14228bf7ba42b138fe2ea" // World Imagery Firefly (with Luminosity blend mode)
                            },
                            blendMode: "luminosity",
                        }),
                        // new VectorTileLayer({
                        //     portalItem: {
                        //         id: "1ddbb25aa29c4811aaadd94de469856a" // Human Geography Dark Detail (with Overlay blend mode),
                        //     },
                        //     blendMode: "overlay"
                        // }),
                        new VectorTileLayer({
                            // A derivative of Human Geography Dark Base created by John Nelson.
                            // Retains only the "water" layer, suitable as a lightweight and performant oceans overlay.
                            // @see https://www.arcgis.com/home/item.html?id=3ddaa8669db44d73ae70c34ad12b00f4
                            portalItem: {
                                id: "3ddaa8669db44d73ae70c34ad12b00f4" 
                            },
                            blendMode: "multiply",
                            opacity: .85
                        }),
                        new VectorTileLayer({
                            portalItem: {
                                id: "6061e78281f94bb6a671d11253d41f6e" // World Ocean Reference - US
                            },
                            blendMode: "screen",
                            effect: "invert()",
                            opacity: .75
                        })
                    ]
                }
            });

            const view = new ArcGISMapView({
                container: mapDivRef.current,
                map,
                center: defaultMapCenterLocation ? [ defaultMapCenterLocation.lon, defaultMapCenterLocation.lat ] : undefined,
                zoom: defaultMapCenterLocation ? defaultMapCenterLocation.zoom : undefined,
                background: { // autocasts new ColorBackground()
                    color: BACKGROUND_COLOR // autocasts as new Color()
                },
                popup: null
            });

            const compass = new Compass({
                view: view
            });

            const homeWidget = new Home({
                view: view
            })

            view.ui.add(homeWidget, "top-left");

            view.ui.add(compass, "top-left");

            view.when(()=>{
                setMapView(view);
            });

        } catch(err){   
            console.error(err);
        }
    };

    // const go2bookmark = async()=>{

    //     const { lat, lon, zoom } = bookmark;

    //     mapView.goTo({
    //         target: [lon, lat],
    //         zoom
    //     });

    // };

    const addWatchEvent = async()=>{
        // type Modules = [typeof IwatchUtils];

        if(onStationary){
            try {
                // const [ 
                //     watchUtils 
                // ] = await (loadModules([
                //     'esri/core/watchUtils'
                // ]) as Promise<Modules>);
    
                watch(() => mapView.stationary, (stationary)=>{
                    // console.log('mapview is stationary', mapView.center, mapView.zoom);

                    if(!stationary){
                        return
                    }
    
                    onStationary({
                        lat: +mapView.center.latitude.toFixed(3),
                        lon: +mapView.center.longitude.toFixed(3),
                        zoom: mapView.zoom
                    });
                });
    
            } catch(err){   
                console.error(err);
            }
        }

    };

    React.useEffect(()=>{
        // loadCss();
        initMapView();
    }, []);

    React.useEffect(()=>{
        if(mapView){
            addWatchEvent();
        }
    }, [ mapView ])

    // React.useEffect(()=>{
    //     if(mapView && bookmark){
    //         go2bookmark();
    //     }
    // }, [ bookmark ])

    return (
        <>
            <div 
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
                ref={mapDivRef}
            ></div>
            { 
                React.Children.map(children, (child)=>{
                    return React.cloneElement(child as React.ReactElement<any>, {
                        mapView,
                    });
                }) 
            }
        </>
    );
};

export default MapView;