import React from 'react';

import styled from 'styled-components';

const SelectBtnContainer = styled.div<{ 
    disabled: boolean
}>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: ${props => props.disabled ? 'none' : 'unset'};
    opacity: ${ props => props.disabled ? '.5' : 'unset'};

    path {
        fill: rgba(255, 255, 255, 0.6);
    }

    :hover path {
        fill: rgba(255, 255, 255, 0.8);
    }

    :active path {
        fill: rgba(255, 255, 255, 1);
    }

`;

const SelectBtnLabel = styled.span`
    font-size: 14px;
    color:#000;
`;

type Props = {
    min: number;
    max: number;
    defaultValue?: number; 
    textColor?: string;
    onChange: (value: number)=>void;
    // format current value
    currentValueLabelformatter?: (value: number)=>string;
    navBtnLabelformatter?: (value: number)=>string;
    rotatable?: boolean;
}

const ValueSelector:React.FC<Props> = ({
    min,
    max,
    defaultValue,
    textColor,
    onChange,
    currentValueLabelformatter,
    navBtnLabelformatter,
    rotatable
}) => {

    const [ currentVal, setCurrentVal ] = React.useState<number>(defaultValue || min);

    const increment = ()=>{
        setCurrentVal(val=>{
            const newVal = val + 1;
            return newVal > max ? min : newVal;
        })
    };

    const decrement = ()=>{
        setCurrentVal(val=>{
            const newVal = val - 1;
            return newVal < min ? max : newVal;
        })
    }

    const getNavBtn = (direction: 'next' | 'previous')=>{

        let labelVal:number;

        let isDisabled = false;

        if(direction==='next'){

            labelVal = currentVal + 1

            if(rotatable){
                labelVal = labelVal > max ? min : labelVal;
            }
            
        } else {
            labelVal = currentVal - 1;

            if(rotatable){
                labelVal = labelVal < min ? max : labelVal;
            }
        }

        const pathD = direction==='next' 
            ? 'M0 32L16 12 32 32z'
            : 'M0 0L32 0 16 20z';

        const icon = (
            <svg 
                height="60"
                width="60"
                viewBox="0 0 32 32"
            >
                <path d={ direction==='next' 
                        ? 'M0 32L16 12 32 32z'
                        : 'M0 0L32 0 16 20z'
                    } 
                    // fill='rgba(255, 255, 255, 0.6)'
                />
            </svg>
        )

        if(!rotatable){
            isDisabled = direction === 'next' 
                ? labelVal > max
                : labelVal < min;
        }

        return (
            <SelectBtnContainer
                onClick={direction==='next' ? increment : decrement }
                disabled={isDisabled}
            >
                { icon }

                { 
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: direction === 'next' ? 0 : 'unset',
                            top: direction === 'previous' ? 2 : 'unset',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        <SelectBtnLabel
                            className='avenir-demi'
                        >
                            { navBtnLabelformatter ? navBtnLabelformatter(labelVal) : labelVal }
                        </SelectBtnLabel>
                    </div>
                }
                
            </SelectBtnContainer>

        )
    }

    React.useEffect(()=>{
        onChange(currentVal)
    }, [currentVal]);

    return (
        <div
            style={{
                margin: '0 .75rem',
                userSelect: 'none'
            }}
        >

            { getNavBtn('next') }

            <div
                className='avenir-light'
                style={{
                    textAlign: "center",
                    fontSize: 80,
                    color: textColor || '#fff',
                    textShadow: '0 0 10px #1B528B'
                }}
            >
                <span>{currentValueLabelformatter ? currentValueLabelformatter(currentVal) : currentVal}</span>
            </div>

            { getNavBtn('previous') }
            
        </div>
    )
}

export default ValueSelector
