import React, { ReactNode } from 'react'
import './BottomPanel.css';

export const ChildAtCenterPosition:React.FC<{children:ReactNode}> = ({children}) => (
    <div className="child-at-center-position">{children}</div>
);

export const ChildAtSidePosition:React.FC<{children:ReactNode}> = ({children}) => (
    <div className="child-at-side-position">{children}</div>
);

type Props = {
    children:ReactNode
}

const BottomPanel:React.FC<Props> = ({
    children
}:Props) => {
    return (
        <div className="styled-bottom-panel">
            <div className="gradient-effect-at-bottom"/>

            <div className="children-wrapper">
                { children }
            </div>

        </div>
    )
}

export default BottomPanel
