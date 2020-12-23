import './style.scss';
import * as React from 'react';

import { loadModules } from 'esri-loader';

import {
    AppContext
} from '../../contexts/AppContextProvider';

import IMapView from 'esri/views/MapView';
import ITimeSlider from 'esri/widgets/TimeSlider';
import ITimeInterval from 'esri/TimeInterval';
import ITimeExtent from 'esri/TimeExtent'

interface Props {
    startDate?: Date;
    endDate?: Date;
    mapView?: IMapView;
}

const TimeSlider:React.FC<Props> = ({
    mapView
})=>{

    const { activeDate, setActiveDate } = React.useContext(AppContext);

    const init = async()=>{
        type Modules = [typeof ITimeSlider];

        try {
            const [ TimeSlider ] = await (loadModules([
                'esri/widgets/TimeSlider'
            ]) as Promise<Modules>);

            const interval = {
                'value': 1,
                'unit': "months"
            } as ITimeInterval;

            const timeSlider = new TimeSlider({
                container: "timeSliderDiv",
                view: mapView,
                fullTimeExtent: {
                    start: new Date(2017, 0, 1),
                    end: new Date(2020, 5, 1)
                },
                mode: 'instant',
                stops: {
                    interval
                },
                values: activeDate ? [ activeDate ] : undefined
            });

            timeSlider.watch('timeExtent', (value:ITimeExtent)=>{
                // console.log(value.start);
                setActiveDate(value.start);
            });

        } catch(err){   
            console.error(err);
        }
    };

    React.useEffect(()=>{
        if(mapView){
            init();
        }
    }, [ mapView ])

    return null;
};

export default TimeSlider;