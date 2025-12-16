import MediaBlock from "../primitives/MediaBlock/MediaBlock";

export default function ShowcaseBlock({mediaType, ...props}) {
    return (
        <MediaBlock
            mediaType={mediaType || "video"}
            orientation="vertical"
            {...props}
        />
    )
}