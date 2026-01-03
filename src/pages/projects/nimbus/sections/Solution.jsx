// Components
import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";

// Patterns
import VisualBlock from "../../../../components/patterns/VisualBlock.jsx";
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx";
import ShowcaseBlock from "../../../../components/patterns/ShowcaseBlock.jsx";

// Assets
import assets from '../../../../assets/projects/nimbus/index.js';
import copy from '../../../../assets/projects/nimbus/copy.js';

export default function Solution() {
    return (
        <>
            <SectionHeader title={copy.design_solution} />
            <MediaBlock
                orientation='vertical'
                cols="12"
                showLabel={false}
                lightSrc={assets["mockup-1"].light.image}
                darkSrc={assets["mockup-1"].dark.image}
                padding="fit"
            />
            <ColumnLayout>
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-2"].light.image}
                    darkSrc={assets["mockup-2"].dark.image}
                    padding="fit"
                />
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-3"].light.image}
                    darkSrc={assets["mockup-3"].dark.image}
                    padding="fit"
                />
            </ColumnLayout>
            <MediaBlock
                caption={copy.dashboard.caption}
                title={copy.dashboard.title}
                description={copy.dashboard.description}
                mediaType="image"
                lightSrc={assets.dashboard.light.image}
                darkSrc={assets.dashboard.dark.image}
            />
            <ShowcaseBlock
                lightSrc={assets.overview.light.video}
                darkSrc={assets.overview.dark.video}
                title={copy.dashboard_preview.title}
                description={copy.dashboard_preview.description}
            />
            <MediaBlock
                mirror={true}
                lightSrc={assets.txn.light.image}
                darkSrc={assets.txn.dark.image}
                caption="Insights"
                title={copy.txn.title}
                description={copy.txn.description}
            />
            <ShowcaseBlock
                lightSrc={assets.txn.light.video}
                darkSrc={assets.txn.dark.video}
                title={copy.txn_preview.title}
                description={copy.txn_preview.description}
            />
            <VisualBlock
                lightSrc={assets["flow-txn"].light.image}
                darkSrc={assets["flow-txn"].dark.image}
            />
            <SectionHeader 
                title={copy.automation.title}
                description={copy.automation.description}
            />
            <ShowcaseBlock
                lightSrc={assets.upload.light.video}
                darkSrc={assets.upload.dark.video}
                title={copy.txn_upload.title}
                description={copy.txn_upload.description}
            />
            <VisualBlock
                lightSrc={assets["flow-upload"].light.image}
                darkSrc={assets["flow-upload"].dark.image}
            />
            <MediaBlock
                mirror={false}
                lightSrc={assets.budget.light.image}
                darkSrc={assets.budget.dark.image}
                caption={copy.budget.caption}
                title={copy.budget.title}
                description={copy.budget.description}
            />
            <ShowcaseBlock
                lightSrc={assets.budget.light.video}
                darkSrc={assets.budget.dark.video}
                title={copy.budget_preview.title}
                description={copy.budget_preview.description}
            />
            <MediaBlock
                mirror={false}
                lightSrc={assets.inv.light.image}
                darkSrc={assets.inv.dark.image}
                caption={copy.inv.caption}
                title={copy.inv.title}
                description={copy.inv.description}
            />
            <ShowcaseBlock
                lightSrc={assets["inv-stocks"].light.video}
                darkSrc={assets["inv-stocks"].dark.video}
                title={copy.inv.title}
                description={copy.inv.description}
            />
            <ShowcaseBlock
                lightSrc={assets["inv-mf"].light.video}
                darkSrc={assets["inv-mf"].dark.video}
                title={copy.inv_preview[0].title}
                description={copy.inv_preview[0].description}
            />
            <ShowcaseBlock
                lightSrc={assets["inv-commo"].light.video}
                darkSrc={assets["inv-commo"].dark.video}
                title={copy.inv_preview[1].title}
                description={copy.inv_preview[1].description}
            />
            <VisualBlock
                lightSrc={assets["flow-inv"].light.image}
                darkSrc={assets["flow-inv"].dark.image}
                title={copy.inv_preview[2].title}
                description={copy.inv_preview[2].description}
            />
            <SectionHeader title="Style Guide"/>
            <VisualBlock
                lightSrc={assets["style-1"].light.image}
                darkSrc={assets["style-1"].dark.image}
            />
            <VisualBlock
                lightSrc={assets["style-2"].light.image}
                darkSrc={assets["style-2"].dark.image}
            />
            <VisualBlock
                lightSrc={assets["style-3"].light.image}
                darkSrc={assets["style-3"].dark.image}
            />
            <VisualBlock
                lightSrc={assets["style-4"].light.image}
                darkSrc={assets["style-4"].dark.image}
            />
        </>
    );
}