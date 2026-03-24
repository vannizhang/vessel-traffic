import React from 'react'
import { DEFAULT_TEXT_COLOR } from '../../constants/UI';
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div
            className='about-container font-size--3 leader-quarter'
            style={{ color: DEFAULT_TEXT_COLOR }}
        >
            <p className="about-styled-p">The U.S. Vessel Traffic application is a web-based visualization and data-access utility created by <a target="_blank" href="https://www.esri.com/en-us/home">Esri</a>. Explore U.S. maritime activity, look for patterns, and download manageable subsets of this massive data set. Vessel traffic data are an invaluable resource made available to our community by the US Coast Guard, NOAA and BOEM through Marine Cadastre. This information can help marine spatial planners better understand users of ocean space and identify potential space-use conflicts.</p>

            <p className="about-styled-p">To download this data for your own analysis, explore the Download Options, navigate to a NOAA Electronic Navigation Chart area of interest, and make your selection. This data was sourced from the Automatic Identification System (AIS) provided by USCG, NOAA, and BOEM through <a target="_blank" href="https://marinecadastre.gov/ais/">Marine Cadastre</a> and aggregated for visualization and sharing in <a target="_blank" href="https://www.esri.com/en-us/arcgis/products/arcgis-pro/overview">ArcGIS Pro</a>. This application was built with the <a target="_blank" href="https://developers.arcgis.com/javascript/">ArcGIS API for JavaScript</a>.</p>

            <p className="about-styled-p">Access this data as an ArcGIS Online collection <a target="_blank" href="https://www.arcgis.com/home/group.html?id=b094a38a8ebe4017b8f41cc7b0f6be22#overview">here</a>. Learn more about AIS tracking <a target="_blank" href="https://en.wikipedia.org/wiki/Automatic_identification_system">here</a>. Find more <a target="_blank" href="https://livingatlas.arcgis.com/en/browse/#d=2&amp;categories=Environment%3A0100000000">ocean and maritime resources in Living Atlas</a>. Inquiries can be sent to <a target="_blank" href="mailto:KVanGraafeiland@esri.com">Keith VanGraafeiland</a>.</p>

        </div>
    )
}

export default AboutSection
