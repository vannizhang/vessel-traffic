import React, { useEffect } from 'react';
import { ShipTrafficSubLayerName } from '../ShipTrafficLayer/ShipTrafficLayer';

const TITLE = 'U.S. Vessel Traffic';
const DESCRIPTION = 'AIS shipping tracks since Jan 2015. Find patterns & download for analysis';
const AUTHOR = 'ArcGIS Living Atlas of the World';
const KEYWORDS = [
    "AIS",
    "Vessel Traffic",
    "ESRI",
    "Living Atlas"
].join(',')

const setMeta = (name: string, content: string) => {
    let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
    if (!el) {
        el = document.createElement('meta');
        el.name = name;
        document.head.appendChild(el);
    }
    el.content = content;
};

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
}

const DocumentHead:React.FC<Props> = ({
    visibleSubLayer
}) => {
    useEffect(() => {
        document.title = `${TITLE} | ${visibleSubLayer}`;
        setMeta('description', DESCRIPTION);
        setMeta('author', AUTHOR);
        setMeta('keywords', KEYWORDS);
        setMeta('og:title', TITLE);
        setMeta('og:description', DESCRIPTION);
        setMeta('og:image', window.location.origin + window.location.pathname + 'public/thumbnail.png');
    }, [visibleSubLayer]);

    return null;
}

export default DocumentHead
