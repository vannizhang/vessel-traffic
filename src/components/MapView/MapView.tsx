import * as React from 'react';

import { loadModules, loadCss } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IMap from "esri/Map";
import IwatchUtils from 'esri/core/watchUtils';
import ITileLayer from 'esri/layers/TileLayer';
import IVectorTileLayer from 'esri/layers/VectorTileLayer';

import { BookmarkData } from '../Bookmarks/Bookmarks';

import {
    AppContext
} from '../../contexts/AppContextProvider';

export type MapCenterLocation = {
    lat: number;
    lon: number;
    zoom: number;
}

interface Props {
    webmapId: string;
    defaultMapCenterLocation?: MapCenterLocation;
    onStationary: (centerLocation:MapCenterLocation)=>void;
    // paddingRight?: number;
    // bookmark?: BookmarkData;
};

const MapView:React.FC<Props> = ({
    webmapId,
    defaultMapCenterLocation,
    onStationary,
    // paddingRight = 0,
    // bookmark,
    children
})=>{

    const mapDivRef = React.useRef<HTMLDivElement>();

    // const { mapCenterLocation, setMapCenterLocation } = React.useContext(AppContext);

    const [ mapView, setMapView] = React.useState<IMapView>(null);

    const initMapView = async()=>{
        
        type Modules = [
            typeof IMapView, 
            typeof IMap,
            typeof ITileLayer,
            typeof IVectorTileLayer
        ];

        try {
            const [ 
                MapView, 
                Map,
                TileLayer,
                VectorTileLayer
            ] = await (loadModules([
                'esri/views/MapView',
                'esri/Map',
                'esri/layers/TileLayer',
                'esri/layers/VectorTileLayer'
            ]) as Promise<Modules>);

            const map = new Map({
                basemap: {
                    baseLayers: [
                        new TileLayer({
                            portalItem: {
                                id: "a66bfb7dd3b14228bf7ba42b138fe2ea" // World Imagery Firefly (with Luminosity blend mode)
                            },
                            blendMode: "luminosity",
                        }),
                        new VectorTileLayer({
                            portalItem: {
                                id: "1ddbb25aa29c4811aaadd94de469856a" // Human Geography Dark Detail (with Overlay blend mode),
                            },
                            blendMode: "overlay"
                        }),
                        // new VectorTileLayer({
                        //     portalItem: {
                        //         id: "94329802cbfa44a18f423e6f1a0b875c" // World Ocean Reference (with Hard Light blend mode)
                        //     },
                        //     blendMode: "hard-light",
                        //     // // for some reason chrome crashes if effect is on
                        //     // effect: "invert() saturate(0)"
                        // })
                    ]
                }
            });

            const view = new MapView({
                container: mapDivRef.current,
                map,
                center: defaultMapCenterLocation ? [ defaultMapCenterLocation.lon, defaultMapCenterLocation.lat ] : undefined,
                zoom: defaultMapCenterLocation ? defaultMapCenterLocation.zoom : undefined,
                background: { // autocasts new ColorBackground()
                    color: "#1b528b" // autocasts as new Color()
                }
            });

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
        type Modules = [typeof IwatchUtils];

        if(onStationary){
            try {
                const [ 
                    watchUtils 
                ] = await (loadModules([
                    'esri/core/watchUtils'
                ]) as Promise<Modules>);
    
                watchUtils.whenTrue(mapView, 'stationary', ()=>{
                    // console.log('mapview is stationary', mapView.center, mapView.zoom);
    
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
        loadCss();
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