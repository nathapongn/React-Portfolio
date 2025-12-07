// CSS
import "./MediaBlock.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import Wrapper from "../../components/Wrapper/Wrapper.jsx"

export default function MediaBlock({
  showLabel = true,
  title = "Title",
  titleSize = "text-xl",
  description = "Description",
  descriptionSize = "text-m",
  mediaType = "image",
  lightSrc,
  darkSrc,
  withWrapper=true,
  mirror = false,
  orientation = "horizontal",
  caption,
  mediaCaption,
  cols=12,
  alt
}) {

    const { darkMode } = useContext(ThemeContext);

    const content = (
            <div className={`media-block ${mirror ? "mirror" : ""} ${orientation} col-span-${cols}`}>
                <div className={`media-wrapper ${mediaType === "video" ? "video" : "image"}`}>
                    {mediaType === "video" ? 
                    <video className="media-video" src={darkMode ? (darkSrc || lightSrc): lightSrc} autoPlay loop muted playsInline /> 
                    : 
                    <img src={darkMode ? (darkSrc || lightSrc): lightSrc} alt={alt} />}
                    {mediaCaption != "" && <p className="text-m text-neutral-secondary media-caption">{mediaCaption}</p>}
                </div>
                {showLabel ?
                <div className="media-label">
                    {caption != '' && <p className="media-text-s strong accent">{caption}</p>}
                    <h1 className={`${orientation === "vertical" ? "text-l" : titleSize} text-neutral-primary`}>{title}</h1>
                    <p className={`${descriptionSize} text-neutral-secondary`}>{description}</p>
                </div> : null
                }
            </div>
        );

    // Return with Wrapper when using MediaBlock on its own, return without MediaBlock when used as a child of ColumnLayout Component
    return withWrapper ? <Wrapper>{content}</Wrapper> : content;
}

