import React from 'react';

import { IS_MOBILE_DEVICE } from '../../constants/UI';
import './ValueSelector.css';

type Props = {
    min: number;
    max: number;
    value?: number; 
    textColor?: string;
    onChange: (value: number)=>void;
    // format current value
    currentValueLabelformatter?: (value: number)=>string;
    navBtnLabelformatter?: (value: number)=>string;
    rotatable?: boolean;
    isTopNavDisabled?: boolean;
    isBottomNavDisabled?: boolean;
}

const ValueSelector:React.FC<Props> = ({
    min,
    max,
    value,
    textColor,
    onChange,
    currentValueLabelformatter,
    navBtnLabelformatter,
    rotatable,
    isTopNavDisabled,
    isBottomNavDisabled
}) => {

    const increment = ()=>{
        const newVal = value + 1;
        onChange(newVal > max ? min : newVal);
    };

    const decrement = ()=>{
        const newVal = value - 1;
        onChange(newVal < min ? max : newVal);
    }

    const getNavBtn = (direction: 'next' | 'previous')=>{

        let labelVal:number;

        let isDisabled = direction === 'next' ? isTopNavDisabled : isBottomNavDisabled;

        if(direction==='next'){

            labelVal = value + 1

            if(rotatable){
                labelVal = labelVal > max ? min : labelVal;
            }
            
        } else {
            labelVal = value - 1;

            if(rotatable){
                labelVal = labelVal < min ? max : labelVal;
            }
        }

        // const pathD = direction==='next' 
        //     ? 'M0 32L16 12 32 32z'
        //     : 'M0 0L32 0 16 20z';

        const icon = (
            <svg 
                height="30"
                width="40"
                viewBox="0 0 40 30"
            >
                <path d={ direction==='next' 
                        ? 'M0 30L20 0 40 30z'
                        : 'M0 0L40 0 20 30z'
                    } 
                    // fill='rgba(255, 255, 255, 0.6)'
                />
            </svg>
        )

        // if(!rotatable){
        //     isDisabled = direction === 'next' 
        //         ? labelVal > max
        //         : labelVal < min;
        // }

        return (
            <div
                className={`select-btn-container${isDisabled ? ' select-btn-container--disabled' : ''}`}
                onClick={direction==='next' ? increment : decrement }
            >
                { icon }

                { 
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: direction === 'next' ? -1 : 'unset',
                            top: direction === 'previous' ? -1 : 'unset',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        <span
                            className='select-btn-label avenir-demi'
                            style={{
                                opacity: isDisabled ? .3 : 1
                            }}
                        >
                            { navBtnLabelformatter ? navBtnLabelformatter(labelVal) : labelVal }
                        </span>
                    </div>
                }
                
            </div>

        )
    }

    // React.useEffect(()=>{
    //     onChange(currentVal)
    // }, [currentVal]);

    return (
        <div
            style={{
                margin: '0 .75rem',
                userSelect: 'none'
            }}
        >

            { getNavBtn('next') }

            <div
                // use avenir thin font
                className='avenir-light'
                style={{
                    textAlign: "center",
                    fontSize: IS_MOBILE_DEVICE ? 30 : 80,
                    color: textColor || '#fff',
                    textShadow: '0 0 10px #1B528B',
                }}
            >
                <span>{currentValueLabelformatter ? currentValueLabelformatter(value) : value}</span>
            </div>

            { getNavBtn('previous') }
            
        </div>
    )
}

export default ValueSelector
