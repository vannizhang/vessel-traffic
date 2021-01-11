import React from 'react'
import { ActiveLayerTimeInfo } from '../../types';

import ValueSelector from './ValueSelector';

import {
    ShipTrafficSubLayerName,
    ShipTrafficSubLayerStyles
} from '../ShipTrafficLayer/ShipTrafficLayer';
import { AppContext } from '../../contexts/AppContextProvider';

type Props = {
    visibleSubLayer: ShipTrafficSubLayerName;
    activeLayerTimeInfo: ActiveLayerTimeInfo,
    onChange: (val:ActiveLayerTimeInfo)=>void;
}

const TimeSelectorContainer:React.FC<Props> = ({
    visibleSubLayer,
    activeLayerTimeInfo,
    onChange
}) => {

    const { AISLayersData } = React.useContext(AppContext);

    const LatestAISLayer = AISLayersData[AISLayersData.length - 1];

    const color = ShipTrafficSubLayerStyles[visibleSubLayer]["text-color"];

    const monthValOnChange = (newMonth:number)=>{
        const { year } = activeLayerTimeInfo;

        let newYearVal = year;

        if(newMonth === 1 && activeLayerTimeInfo.month === 12 ){
            newYearVal = year + 1
        }

        if(newMonth === 12 && activeLayerTimeInfo.month === 1 ){
            newYearVal = year - 1
        }

        onChange({
            year: newYearVal,
            month: newMonth
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
                value={activeLayerTimeInfo.month}
                rotatable={true}
                textColor={color}
                onChange={monthValOnChange}
                currentValueLabelformatter={(value)=>{
                    return value < 10 
                        ? `0${value.toString()}` 
                        : value.toString() 
                }}
                isTopNavDisabled={activeLayerTimeInfo && activeLayerTimeInfo.year === +LatestAISLayer.Year && activeLayerTimeInfo.month >= +LatestAISLayer.Month }
                isBottomNavDisabled={activeLayerTimeInfo && activeLayerTimeInfo.year === +AISLayersData[0].Year && activeLayerTimeInfo.month === 1}
            />

            <ValueSelector 
                key='year-selector'
                min={+AISLayersData[0].Year}
                max={+LatestAISLayer.Year}
                value={activeLayerTimeInfo.year}
                textColor={color}
                onChange={yearValOnChange}
                navBtnLabelformatter={(value)=>{
                    return value.toString().slice(2)
                }}
                isTopNavDisabled={activeLayerTimeInfo && activeLayerTimeInfo.year === +LatestAISLayer.Year}
                isBottomNavDisabled={activeLayerTimeInfo && activeLayerTimeInfo.year === +AISLayersData[0].Year}
            />
        </div>
    )
}

export default TimeSelectorContainer
