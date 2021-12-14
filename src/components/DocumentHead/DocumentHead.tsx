import React from 'react';
import { Helmet } from 'react-helmet';
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

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
}

const DocumentHead:React.FC<Props> = ({
    visibleSubLayer
}) => {
    return (
        <Helmet>
            <title>{TITLE} | {visibleSubLayer}</title>
            <meta name="description" content={DESCRIPTION} />
            <meta name="author" content={AUTHOR} />
            <meta name="keywords" content={KEYWORDS} />
            <meta name="og:title" content={TITLE} />
            <meta name="og:description" content={DESCRIPTION} />
            <meta name="og:image" content={window.location.origin + window.location.pathname + `public/thumbnail.png`} />
        </Helmet>
    )
}

export default DocumentHead
