import MediaBlock from '../primitives/MediaBlock/MediaBlock';

export default function FeatureBlock({mirror,...props}) {
    return (
        <MediaBlock
            orientation="horizontal"
            mirror={mirror}
            {...props}
        />
    );
}