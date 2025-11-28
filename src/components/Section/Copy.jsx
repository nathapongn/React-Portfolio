import './Copy.css';
import Icon from '../Icon/Icon.jsx'

export default function Copy(
    {title="Title", 
    description="Description", 
    titleSize="text-xl", 
    descriptionSize="text-s", 
    background=false, 
    cols=12,
    media=false, 
    mediaSrc, 
    alt,
    icon=null}) {
    return(
        <div className={`copy ${background ? "background" : ""} col-span-${cols}`}>
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