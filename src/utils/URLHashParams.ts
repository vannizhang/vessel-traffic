import {
    urlFns
} from 'helper-toolkit-ts';
import { MapCenterLocation } from '../components/MapView/MapView';
import { ShipTrafficSubLayerName } from '../components/ShipTrafficLayer/ShipTrafficLayer';
import { ActiveLayerTimeInfo } from '../types';
import IPoint from '@arcgis/core/geometry/Point'

type HashParamKey = '@' | 'sublayer' | 'time' | 'queryPoint';

type DefaultStateValues = {
    '@': MapCenterLocation,
    'sublayer': ShipTrafficSubLayerName,
    'time': ActiveLayerTimeInfo,
    'queryPoint': [number, number]; // longitude, latitude
}

const DefaultHashData:Record<HashParamKey, string> = urlFns.parseHash();

export const getDefaultStateValuesFromHash = ():DefaultStateValues=>{

    const {
        sublayer,
    } = DefaultHashData;

    const time = decodeTime();

    const queryPoint = decodeQueryPoint();

    return {
        '@': decodeMapCenterInfo(),
        sublayer: sublayer as ShipTrafficSubLayerName,
        time,
        queryPoint
    };
}

export const saveMapCenterLocation2Hash = (mapCenterLocation:MapCenterLocation):void=>{
    const key:HashParamKey = '@';

    const { lat, lon, zoom } = mapCenterLocation;

    const value = `${lon},${lat},${zoom}`;

    urlFns.updateHashParam({
        key,
        value
    })
}

export const saveActiveLayerTime2Hash = (layerTime:ActiveLayerTimeInfo): void=>{
    const key:HashParamKey = 'time';

    const { year, month } = layerTime;

    const monthStr = month >= 10 ? month.toString() : `0${month}`

    const value = `${year}${monthStr}`;

    urlFns.updateHashParam({
        key,
        value
    })
}

export const saveVisibleLayer2Hash = (sublayerName:ShipTrafficSubLayerName): void=>{
    const key:HashParamKey = 'sublayer';

    const value = sublayerName;

    urlFns.updateHashParam({
        key,
        value
    })
}

export const saveQueryPoint2Hash = (mapPoint:IPoint): void=>{
    const key:HashParamKey = 'queryPoint';

    const value = mapPoint ? `${mapPoint.longitude.toFixed(5)},${mapPoint.latitude.toFixed(5)}` : undefined;

    urlFns.updateHashParam({
        key,
        value
    })
}


const decodeTime = ():ActiveLayerTimeInfo=>{
    const {
        time
    } = DefaultHashData;

    if(!time){
        return null;
    }

    const year = time ? +time.slice(0, 4) : undefined;
    const month = time ? +time.slice(4) : undefined;

    return {
        year,
        month
    }

}

const decodeQueryPoint = ():[number, number]=>{
    const {
        queryPoint
    } = DefaultHashData;

    if(!queryPoint){
        return null;
    }

    const [ lon, lat ] = queryPoint.split(',').map(val=>+val);

    return [
        lon, lat
    ]
}

const decodeMapCenterInfo = ():MapCenterLocation=>{
    const location = DefaultHashData['@'];

    if(!location){
        return null;
    }

    const [
        lon, lat, zoom 
    ] = location.split(',').map(d=>+d)

    return {
        lon, lat, zoom 
    }

}