import React from 'react'
import { ShipTrafficFeature } from '../ShipTrafficLayerQueryTask/ShipTrafficLayerQueryTask';
import { format } from 'date-fns';

type Props = {
    feature: ShipTrafficFeature;
    onClose: ()=>void;
}

const ShipInfoWindow:React.FC<Props> = ({
    feature,
    onClose
}) => {

    const getContent = ():JSX.Element=>{

        if(!feature){
            return null;
        }

        const {
            attributes
        } = feature;

        const {
            vesselname,
            vesselgroup,
            vesselclass,
            start_date,
            end_date
        } = attributes;

        // console.log(attributes)

        const formater = 'yyyy/MM/dd h:mm aaaa'
        const startTime = start_date ? format(new Date(start_date), formater) : '';
        const endTime = end_date ? format(new Date(end_date), formater) : '';

        return (
            <div>
                <h5 className='font-size--2'>{ vesselname }</h5>

                <div className='font-size--3'>
                    <span>Track Start Time: {startTime}</span>
                    <br/>
                    <span>Track End Time: {endTime}</span>
                </div>
            </div>
        );
    }

    return feature ? (
        <div
            style={{
                position: 'relative',
                boxSizing: 'border-box',
                padding: '.5rem 1rem',
                background: 'rgba(255,255,255,.1)'
            }}
        >
            <div 
                style={{
                    position: 'absolute',
                    top: '.25rem',
                    right: '.35rem',
                    cursor: 'pointer'
                }}
                onClick={onClose}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24"><path stroke="#fff" d="M18.01 6.697L12.707 12l5.303 5.303-.707.707L12 12.707 6.697 18.01l-.707-.707L11.293 12 5.99 6.697l.707-.707L12 11.293l5.303-5.303z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
            </div>
            { getContent() }
        </div>
    ) : null;
}

export default ShipInfoWindow;
