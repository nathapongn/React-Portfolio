import './Icon.css'
import Tooltip from '../Tooltip/Tooltip.jsx'
import { useState } from 'react'

export default function Icon({children, className, tooltip}) {
    const [ showTooltip, setShowTooltip ] = useState(false)

    return(
        <div 
            className="icon-wrapper"
            onMouseEnter={() => {setShowTooltip(true)}}
            onMouseLeave={() => {setShowTooltip(false)}}
        >
            {showTooltip && tooltip && (
                <div className="tooltip-wrapper">
                    <Tooltip>{tooltip}</Tooltip>
                </div>
            )
            }
            <div className={`icon ${className}`}>{children}</div>
        </div>
    )
}