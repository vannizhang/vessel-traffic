import * as React from 'react';

import ArcGISMapView from '@arcgis/core/views/MapView';
import TileLayer from '@arcgis/core/layers/TileLayer';
import VectorTileLayer from '@arcgis/core/layers/VectorTileLayer';
import Basemap from '@arcgis/core/Basemap';
import { watch } from '@arcgis/core/core/reactiveUtils';
import '@arcgis/map-components/components/arcgis-map';
import '@arcgis/map-components/components/arcgis-zoom';
import '@arcgis/map-components/components/arcgis-compass';
import '@arcgis/map-components/components/arcgis-home';

import { BACKGROUND_COLOR } from '../../constants/UI';

export type MapCenterLocation = {
    lat: number;
    lon: number;
    zoom: number;
}

interface Props {
    defaultMapCenterLocation?: MapCenterLocation;
    onStationary: (centerLocation:MapCenterLocation)=>void;
    children:React.ReactNode
};

const MapView:React.FC<Props> = ({
    defaultMapCenterLocation,
    onStationary,
    children
})=>{

    const [ mapView, setMapView] = React.useState<ArcGISMapView>(null);

    const basemap = React.useMemo(() => new Basemap({
        baseLayers: [
            new TileLayer({
                portalItem: {
                    id: "a66bfb7dd3b14228bf7ba42b138fe2ea" // World Imagery Firefly (with Luminosity blend mode)
                },
                blendMode: "luminosity",
            }),
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
    }), []);

    React.useEffect(() => {
        const viewElement = document.querySelector('arcgis-map') as any;

        viewElement.addEventListener('arcgisViewReadyChange', () => {
            const view = viewElement.view;

            if (!(view instanceof ArcGISMapView)) {
                console.error('The view is not an instance of ArcGISMapView');
                return;
            }

            setMapView(view as ArcGISMapView);
        });
    }, []);

    React.useEffect(()=>{
        if(mapView && onStationary){
            watch(() => mapView.stationary, (stationary)=>{
                if(!stationary){
                    return;
                }

                onStationary({
                    lat: +mapView.center.latitude.toFixed(3),
                    lon: +mapView.center.longitude.toFixed(3),
                    zoom: mapView.zoom
                });
            });
        }
    }, [ mapView ]);

    return (
        <>
            <arcgis-map
                basemap={basemap}
                center={defaultMapCenterLocation ? [defaultMapCenterLocation.lon, defaultMapCenterLocation.lat] : undefined}
                zoom={defaultMapCenterLocation ? defaultMapCenterLocation.zoom : undefined}
                popupDisabled={true}
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
            >
                <arcgis-home slot="top-left"></arcgis-home>
                <arcgis-compass slot="top-left"></arcgis-compass>
                <arcgis-zoom slot="top-left"></arcgis-zoom>
            </arcgis-map>
            { mapView
                ? React.Children.map(children, (child)=>{
                    if(!child){
                        return null;
                    }
                    return React.cloneElement(child as React.ReactElement<any>, {
                        mapView,
                    });
                }) 
                : null
            }
        </>
    );
};

export default MapView;