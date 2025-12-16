// Components
import MediaBlock from "../../../../components/primitives/MediaBlock/MediaBlock.jsx";
import ColumnLayout from "../../../../components/primitives/Section/ColumnLayout.jsx";

// Patterns
import VisualBlock from "../../../../components/patterns/VisualBlock.jsx";
import SectionHeader from "../../../../components/patterns/SectionHeader.jsx";
import ShowcaseBlock from "../../../../components/patterns/ShowcaseBlock.jsx";

// Assets
import assets from '../../../../assets/projects/nimbus/index.js';

export default function Solution() {
    return (
        <>
            <SectionHeader title="Design Solution" />
            <MediaBlock
                orientation='vertical'
                cols="12"
                showLabel={false}
                lightSrc={assets["mockup-1"].light.image}
                darkSrc={assets["mockup-1"].dark.image}
            />
            <ColumnLayout>
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-2"].light.image}
                    darkSrc={assets["mockup-2"].dark.image}
                />
                <MediaBlock
                    withWrapper={false}
                    orientation='vertical'
                    cols="6"
                    showLabel={false}
                    lightSrc={assets["mockup-3"].light.image}
                    darkSrc={assets["mockup-3"].dark.image}
                />
            </ColumnLayout>
            <MediaBlock
                caption="Overview"
                title="Dashboard"
                mediaType="image"
                description="Provides an overview of your assets, statistics, recent transactions, active budgets, and account balances."
                lightSrc={assets.dashboard.light.image}
                darkSrc={assets.dashboard.dark.image}
            />
            <ShowcaseBlock
                lightSrc={assets.overview.light.video}
                darkSrc={assets.overview.dark.video}
                title="Accuracy"
                description="A convenient date range picker offers users with varying payroll dates a clear and accurate view of their true monthly cash flow and budget."
            />
            <MediaBlock
                mirror={true}
                lightSrc={assets.txn.light.image}
                darkSrc={assets.txn.dark.image}
                caption="Insights"
                title="Transaction"
                description="Detailed record of all transactions with a stacked bar chart displaying transaction categories for each month, offering a clear visualization of users' spending patterns."
            />
            <ShowcaseBlock
                lightSrc={assets.txn.light.video}
                darkSrc={assets.txn.dark.video}
                title="Transaction Overview"
                description="Users can view records of all their transactions, spending pattern by categories, and edit records."
            />
            <VisualBlock
                lightSrc={assets["flow-txn"].light.image}
                darkSrc={assets["flow-txn"].dark.image}
            />
            <SectionHeader 
                title="Automation" 
                description="Besides manual transaction entry, users can link accounts from supported banks or upload payment slips and bank statements to automatically log transactions."
            />
            <ShowcaseBlock
                lightSrc={assets.upload.light.video}
                darkSrc={assets.upload.dark.video}
                title="Transaction Upload"
                description="Users can upload payment slips to record expenses or historical statements to automatically log all transactions. An AI model analyzes the upload via OCR, inputs transaction information, and assigns categories for recognized recipients or senders. Users can then fine-tune these categories or add notes."
            />
            <VisualBlock
                lightSrc={assets["flow-upload"].light.image}
                darkSrc={assets["flow-upload"].dark.image}
            />
            <MediaBlock
                mirror={false}
                lightSrc={assets.txn.light.image}
                darkSrc={assets.txn.dark.image}
                caption="Keep Control"
                title="Budget"
                description="Take control of spending by adding a custom budget and setting a limit for different categories. Stay informed with daily recommended spending amounts and receive notifications when approaching budget limits."
            />
            <ShowcaseBlock
                lightSrc={assets.budget.light.video}
                darkSrc={assets.budget.dark.video}
                title="Create Budget"
                description="Users can create a budget by selecting their preferred categories and setting spending limits, with a recommended daily amount to stay within budget."
            />
            <MediaBlock
                mirror={false}
                lightSrc={assets.inv.light.image}
                darkSrc={assets.inv.dark.image}
                caption="Comprehensive"
                title="Investment"
                description="Track investments including domestic mutual funds, stocks across major international markets, and commodities. Compare performance across various asset types with ease."
            />
            <ShowcaseBlock
                lightSrc={assets["inv-stocks"].light.video}
                darkSrc={assets["inv-stocks"].dark.video}
                title="Stocks"
                description="Track stocks across major exchanges."
            />
            <ShowcaseBlock
                lightSrc={assets["inv-mf"].light.video}
                darkSrc={assets["inv-mf"].dark.video}
                title="Mutual Funds"
                description="Track domestic mutual funds with daily NAV updates."
            />
            <ShowcaseBlock
                lightSrc={assets["inv-commo"].light.video}
                darkSrc={assets["inv-commo"].dark.video}
                title="Commodities"
                description="Track major commodities in customizable units."
            />
            <VisualBlock
                lightSrc={assets["flow-inv"].light.image}
                darkSrc={assets["flow-inv"].dark.image}
                title="Commodities"
                description="Track major commodities in customizable units."
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