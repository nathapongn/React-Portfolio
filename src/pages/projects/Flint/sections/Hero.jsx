import Cover from "../../../../components/primitives/Cover/Cover.jsx";
import Copy from "../../../../components/primitives/Section/Copy.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";
import Divider from "../../../../components/primitives/Divider/Divider.jsx";

// Assets
import assets from '../../../../assets/projects/nimbus/index.js';

export default function Hero() {
    return (
        <>
            <Cover 
                lightSrc={assets.cover.light.image}
                darkSrc={assets.cover.dark.image}
                lightSrcMobile={assets["cover-mobile"].light.image}
                darkSrcMobile={assets["cover-mobile"].dark.image}
                modeSupport={true}
            />
            <ColumnLayout>
                <Copy
                    title="Flint"
                    titleSize="text-xxl"
                    description="An investing app that inspires beginners to invest and empowers them with valuable information every step of the way."
                    descriptionSize="text-m"
                    cols="6"
                    textAlign="left"
                />
                <Copy
                    title="Tools"
                    titleSize="text-m strong"
                    description={
                    <ul className="list-plain">
                        <li>Figma</li>
                        <li>Adobe Premiere</li>
                        <li>Adobe Photoshop</li>
                    </ul>}
                    descriptionSize="text-m"
                    cols="3"
                    textAlign="left"
                />
                <Copy 
                    title="Role"
                    titleSize="text-m strong"
                    description="Individual Project"
                    descriptionSize="text-m"
                    cols="3"
                    textAlign="left"
                />
            </ColumnLayout>
            <Divider />
        </>
    )
}