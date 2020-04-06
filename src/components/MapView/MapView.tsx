import * as React from 'react';

import { loadModules, loadCss } from 'esri-loader';
import IMapView from 'esri/views/MapView';
import IWebMap from "esri/WebMap";
import IwatchUtils from 'esri/core/watchUtils';

import { BookmarkData } from '../Bookmarks/Bookmarks';

import {
    AppContext
} from '../../contexts/AppContextProvider';

interface Props {
    webmapId: string;
    paddingRight?: number;
    bookmark?: BookmarkData;
};

const MapView:React.FC<Props> = ({
    webmapId,
    paddingRight = 0,
    bookmark,
    children
})=>{

    const mapDivRef = React.useRef<HTMLDivElement>();

    const { mapCenterLocation, setMapCenterLocation } = React.useContext(AppContext);

    const [ mapView, setMapView] = React.useState<IMapView>(null);

    const initMapView = async()=>{
        
        type Modules = [typeof IMapView, typeof IWebMap];

        try {
            const [ 
                MapView, 
                WebMap 
            ] = await (loadModules([
                'esri/views/MapView',
                'esri/WebMap',
            ]) as Promise<Modules>);

            const view = new MapView({
                container: mapDivRef.current,
                map: new WebMap({
                    portalItem: {
                        id: webmapId
                    }  
                }),
                padding: {
                    right: paddingRight
                },
                center: mapCenterLocation ? [ mapCenterLocation.lon, mapCenterLocation.lat ] : undefined,
                zoom: mapCenterLocation ? mapCenterLocation.zoom : undefined
            });

            view.when(()=>{
                setMapView(view);
            });

        } catch(err){   
            console.error(err);
        }
    };

    const go2bookmark = async()=>{

        const { lat, lon, zoom } = bookmark;

        mapView.goTo({
            target: [lon, lat],
            zoom
        });

    };

    const addWatchEvent = async()=>{
        type Modules = [typeof IwatchUtils];

        try {
            const [ 
                watchUtils 
            ] = await (loadModules([
                'esri/core/watchUtils'
            ]) as Promise<Modules>);

            watchUtils.whenTrue(mapView, 'stationary', ()=>{
                // console.log('mapview is stationary', mapView.center, mapView.zoom);

                setMapCenterLocation({
                    lat: +mapView.center.latitude.toFixed(3),
                    lon: +mapView.center.longitude.toFixed(3),
                    zoom: mapView.zoom
                });
            });

        } catch(err){   
            console.error(err);
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

    React.useEffect(()=>{
        if(mapView && bookmark){
            go2bookmark();
        }
    }, [ bookmark ])

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