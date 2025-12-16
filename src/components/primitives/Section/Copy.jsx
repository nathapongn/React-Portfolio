import './Copy.css';
import Icon from '../Icon/Icon.jsx'

export default function Copy(
    {
    title="Title",
    description, 
    titleSize="text-xl", 
    descriptionSize="text-m", 
    className,
    background=false, 
    fullWidth=false,
    cols=12,
    media=false,
    mediaSrc,
    textAlign="center",
    alt,
    icon=null
    }) {
    return(
        <div className={`
            copy
            ${className}
            ${background ? "background" : ""} 
            ${fullWidth ? "full-width" : ""}
            copy-align-${textAlign}
            col-span-${cols}`}
            >
            {icon && 
                <Icon className="copy-icon icon-subtle">{icon}</Icon>
            }
            {media && 
                <img src={mediaSrc} alt={alt} />
            }
            <h1 className={`copy-title text-neutral-primary ${titleSize}`}>{title}</h1>
            <p className={`copy-description text-neutral-secondary ${descriptionSize}`}>{description}</p>
        </div>
    )
}