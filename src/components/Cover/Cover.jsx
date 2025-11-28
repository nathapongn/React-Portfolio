// CSS
import './Cover.css'

// React
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

// Components
import Divider from '../Divider/Divider.jsx'

// Lucide
import { LampDesk } from 'lucide-react';

export default function Cover({className, lightSrc, darkSrc, alt}) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className="cover">
            <img className={`cover-image ${className}`} src={darkMode ? (darkSrc || lightSrc) : lightSrc} alt={alt}/>
            <Divider />
            <div className="mode-support-banner">
                <LampDesk />
                <p className="text-primary-neutral text-s">This project can be viewed in both light and dark mode.</p>
            </div>
            <Divider />
        </div>
    )
}