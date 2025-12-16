import './Tooltip.css'

export default function Tooltip({children}) {
    return (
        <div className="tooltip">
            <p className="text-xxs text-inverted-primary">{children}</p>
            <div className="tooltip-pointer"></div>
        </div>
    )
}