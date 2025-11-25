// CSS
import './Card.css'

// React
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

// Components
import Icon from '../Icon/Icon.jsx'

// Lucide
import { Eclipse, ArrowRight } from 'lucide-react';

export default function Card({ children = "Title", description = "Description", modeSupport = false, thumbnailType = "image", lightSrc, darkSrc, gradient = "false", gradientSrc, thumbnailClass, alt }) {
    const { darkMode } = useContext(ThemeContext);
    
    return(
        <>
            <div className="card">
                <div className={`card-thumbnail ${thumbnailClass}`}>
                    {thumbnailType === "video" ? 
                    (<video src={darkMode ? (darkSrc || lightSrc) : lightSrc} autoPlay loop muted playsInline></video>) 
                    : 
                    (<img src={darkMode ? (darkSrc || lightSrc) : lightSrc} alt={alt} />) 
                    }
                    {gradient === true && <img className="card-thumbnail-gradient" src={gradientSrc} />}
                </div>
                <div className="card-footer">
                    <div className="card-footer-label">
                        <div className="card-title">
                            <h2 className="text-xl text-neutral-primary">{children}</h2>
                            {modeSupport && (
                                <Icon>
                                    <Eclipse className="icon-subtle" size={24} />
                                </Icon>
                            )}
                        </div>
                        <p className="card-description text-m text-neutral-secondary">{description}</p>
                    </div>
                    <div className="card-footer-link">
                        <p className="read-more text-s strong accent">Read More</p>
                            <Icon className="read-more-icon">
                                <ArrowRight className="icon-accent" size={24}/>
                            </Icon>
                    </div>
                </div> 
            </div>
        </>
    )
}