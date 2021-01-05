import React from 'react'
import { ActiveLayerTimeInfo } from '../../types';

import ValueSelector from './ValueSelector';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo,
    onChange: (val:ActiveLayerTimeInfo)=>void;
    minYear: number;
    maxYear: number;
}

const TimeSelectorContainer:React.FC<Props> = ({
    visibleSubLayer,
    activeLayerTimeInfo,
    onChange,
    minYear,
    maxYear
}) => {

    const color = ShipTrafficSubLayerStyles[visibleSubLayer]["text-color"];

    const monthValOnChange = (month:number)=>{
        const { year } = activeLayerTimeInfo;

        onChange({
            year,
            month
        })
    };

    const yearValOnChange = (year:number)=>{

        const { month } = activeLayerTimeInfo;

        onChange({
            year,
            month
        })
    };

    return (
        <div
            style={{
                display: 'flex'
            }}
        >
            <ValueSelector 
                key='month-selector'
                min={1}
                max={12}
                defaultValue={activeLayerTimeInfo.month}
                rotatable={true}
                textColor={color}
                onChange={monthValOnChange}
                currentValueLabelformatter={(value)=>{
                    return value < 10 
                        ? `0${value.toString()}` 
                        : value.toString() 
                }}
            />

            <ValueSelector 
                key='year-selector'
                min={minYear}
                max={maxYear}
                defaultValue={activeLayerTimeInfo.year}
                textColor={color}
                onChange={yearValOnChange}
                navBtnLabelformatter={(value)=>{
                    return value.toString().slice(2)
                }}
            />
        </div>
    )
}

export default TimeSelectorContainer
