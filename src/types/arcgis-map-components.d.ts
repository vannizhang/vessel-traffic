import 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'arcgis-map': any;
            'arcgis-zoom': any;
            'arcgis-compass': any;
            'arcgis-home': any;
            'arcgis-search': any;
            'arcgis-expand': any;
            'arcgis-basemap-gallery': any;
        }
    }
}
