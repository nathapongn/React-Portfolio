// Components 
import Cover from '../../components/Cover/Cover.jsx'
import ColumnLayout from '../../components/Section/ColumnLayout.jsx';
import Copy from '../../components/Section/Copy.jsx';
import MediaBlock from '../../components/MediaBlock/MediaBlock.jsx';
import Divider from '../../components/Divider/Divider.jsx'

// Assets
import assets from '../../assets/projects/nimbus/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover 
                    lightSrc={assets.cover.light.image}
                    darkSrc={assets.cover.dark.image}
                    lightSrcMobile={assets["cover-mobile"].light.image}
                    darkSrcMobile={assets["cover-mobile"].dark.image}
                    modeSupport={true}
                />
                <ColumnLayout>
                    <Copy
                        title="Nimbus"
                        titleSize="text-xxl"
                        description="Streamlines personal finance management with automation."
                        descriptionSize="text-m"
                        cols="6"
                    />
                    <Copy
                        title="Tools"
                        titleSize="text-m strong"
                        description={
                        <ul className="list-plain">
                            <li>Figma</li>
                            <li>Microsoft Excel</li>
                            <li>Adobe Premiere</li>
                            <li>Adobe Photoshop</li>
                        </ul>}
                        descriptionSize="text-m"
                        cols="3"
                    />
                    <Copy 
                        title="Role"
                        titleSize="text-m strong"
                        description="Individual Project"
                        descriptionSize="text-m"
                        cols="3"
                    />
                </ColumnLayout>
                <Divider />
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
                    ></Copy>
                    <Copy
                        title="77%"
                        description='of respondents prefer to track their finances weekly, while the remainder prefer daily tracking.'
                        background={true}
                        cols="4"
                    ></Copy>
                    <Copy
                        title="50%"
                        description='of respondents cited customization and visualization of their finances as the most appreciated aspects of their platform.'
                        background={true}
                        cols="4"
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
                <Copy title="Design Solution" className="section-header" fullWidth/>
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
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
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
                <MediaBlock
                    orientation="vertical"
                    mediaType="video"
                    lightSrc={assets.txn.light.video}
                    darkSrc={assets.txn.dark.video}
                    title="Transaction Overview"
                    description="Users can view records of all their transactions, spending pattern by categories, and edit records."
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["flow-txn"].light.image}
                    darkSrc={assets["flow-txn"].dark.image}
                    showLabel={false}
                />
                <Copy 
                    title="Automation" 
                    description="Besides manual transaction entry, users can link accounts from supported banks or upload payment slips and bank statements to automatically log transactions." 
                    className="section-header" 
                    fullWidth
                />
                <MediaBlock
                    mediaType="video"
                    orientation="vertical"
                    lightSrc={assets.upload.light.video}
                    darkSrc={assets.upload.dark.video}
                    title="Transaction Upload"
                    description="Users can upload payment slips to record expenses or historical statements to automatically log all transactions. An AI model analyzes the upload via OCR, inputs transaction information, and assigns categories for recognized recipients or senders. Users can then fine-tune these categories or add notes."
                />
                <MediaBlock
                    orientation="vertical"
                    lightSrc={assets["flow-upload"].light.image}
                    darkSrc={assets["flow-upload"].dark.image}
                    showLabel={false}
                />
            </main>
        </>
    )
}