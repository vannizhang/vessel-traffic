import {
    urlFns
} from 'helper-toolkit-ts';
import { MapCenterLocation } from '../components/MapView/MapView';
import { ShipTrafficSubLayerName } from '../components/ShipTrafficLayer/ShipTrafficLayer';
import { ActiveLayerTimeInfo } from '../types';

type HashParamKey = '@' | 'sublayer' | 'time';

type DefaultStateValues = {
    '@': MapCenterLocation,
    'sublayer': ShipTrafficSubLayerName,
    'time': ActiveLayerTimeInfo
}

const DefaultHashData:Record<HashParamKey, string> = urlFns.parseHash();

export const getDefaultStateValuesFromHash = ():DefaultStateValues=>{

    const {
        sublayer
    } = DefaultHashData;

    const time = decodeTime();

    return {
        '@': decodeMapCenterInfo(),
        sublayer: sublayer as ShipTrafficSubLayerName,
        time,
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