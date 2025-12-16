import MediaBlock from "../primitives/MediaBlock/MediaBlock";

export default function VisualBlock ({mediaType="image",...props}) {
    return (
        <MediaBlock
            mediaType={mediaType}
            orientation="vertical"
            showLabel={false}
            {...props}
        />
    )
}