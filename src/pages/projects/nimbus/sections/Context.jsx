import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";
import Copy from "../../../../components/primitives/Section/Copy.jsx";

// Assets
import assets from '../../../../assets/projects/nimbus/index.js';

export default function Context() {
    return (
        <>
            <MediaBlock 
                    caption="Problem"
                    title="Not Quite Right"
                    description="Since I began tracking my personal finances, I've struggled to find a single app that meets all my needs. One app might excel at a particular feature but lacks a handy feature that another app does well. Moreover, the inconvenience of manually recording all my transactions has been a persistent challenge."
                    lightSrc={assets.problem.light.image}
                    darkSrc={assets.problem.dark.image}
                />
                <ColumnLayout
                    showLabel={true}
                    title="User Research"
                    description="To gather insights, I conducted a brief survey with 16 participants, most of whom currently use a tracking app or platform, while others have used such tools in the past."
                >
                    <Copy
                        title="72%"
                        description='of respondents find the manual tracking process to be their most disliked aspect. Respondents who stopped tracking also cited this aspect as their primary reason.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title="77%"
                        description='of respondents prefer to track their finances weekly, while the remainder prefer daily tracking.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                    <Copy
                        title="50%"
                        description='of respondents cited customization and visualization of their finances as the most appreciated aspects of their platform.'
                        background={true}
                        cols="4"
                        textAlign="left"
                    ></Copy>
                 </ColumnLayout>
                 <MediaBlock
                    title="Objective"
                    description="Design a localized personal finance tracking platform for Thailand that offers comprehensive features with added automation to enhance convenience."
                    lightSrc={assets.obj.light.image}
                    darkSrc={assets.obj.dark.image}
                 />
                <MediaBlock showLabel={false} lightSrc={assets.wireframe.light.image} darkSrc={assets.wireframe.dark.image} />
                <MediaBlock showLabel={false} lightSrc={assets.sitemap.light.image} darkSrc={assets.sitemap.dark.image} />
        </>
    )
}