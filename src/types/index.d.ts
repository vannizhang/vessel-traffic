import { IFeature } from "@esri/arcgis-rest-types";

export enum ShipTrafficFeatureServiceFields {
    mmsi = 'mmsi',
    trackstarttime  = 'trackstarttime',
    trackendtime  = 'trackendtime',
    sog  = 'sog',
    cog  = 'cog',
    heading  = 'heading',
    vesselname  = 'vesselname',
    imo  = 'imo',
    callsign  = 'callsign',
    vesseltype  = 'vesseltype',
    status  = 'status',
    length  = 'length',
    width  = 'width',
    draft  = 'draft',
    cargo  = 'cargo',
    vesselgroup  = 'vesselgroup',
    vesselclass  = 'vesselclass',
}

type ShipTrafficFeatureAttributes = Record<ShipTrafficFeatureServiceFields, string | number>

export type ShipTrafficFeature = IFeature & {
    attributes: ShipTrafficFeatureAttributes
}