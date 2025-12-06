// Components 
import Cover from '../../components/Cover/Cover.jsx'
import ColumnLayout from '../../components/Section/ColumnLayout.jsx';
import Copy from '../../components/Section/Copy.jsx';
import MediaBlock from '../../components/MediaBlock/MediaBlock.jsx';
import Divider from '../../components/Divider/Divider.jsx'
import Wrapper from '../../components/Wrapper/Wrapper.jsx'

// Assets
import assets from '../../assets/projects/nimbus/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover 
                    lightSrc={assets.cover.light}
                    darkSrc={assets.cover.dark}
                    lightSrcMobile={assets["cover-mobile"].light}
                    darkSrcMobile={assets["cover-mobile"].dark}
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
                    lightSrc={assets.problem.light}
                    darkSrc={assets.problem.dark}
                />
                <Wrapper>
                    <Copy 
                        title="User Research"
                        description="To gather insights, I conducted a brief survey with 16 participants, most of whom currently use a tracking app or platform, while others have used such tools in the past."
                        fullWidth
                    ></Copy>
                </Wrapper>
                <ColumnLayout>
                    <Copy
                        title="72%"
                        description='of respondents find the manual tracking process to be their most disliked aspect. Respondents who stopped tracking also cited this aspect as their primary reason.'
                        background={true}
                        cols={4}
                    ></Copy>
                    <Copy
                        title="77%"
                        description='of respondents prefer to track their finances weekly, while the remainder prefer daily tracking.'
                        background={true}
                        cols={4}
                    ></Copy>
                    <Copy
                        title="50%"
                        description='of respondents cited customization and visualization of their finances as the most appreciated aspects of their platform.'
                        background={true}
                        cols={4}
                    ></Copy>
                 </ColumnLayout>
                 <MediaBlock
                    title="Objective"
                    description="Design a localized personal finance tracking platform for Thailand that offers comprehensive features with added automation to enhance convenience."
                    lightSrc={assets.obj.light}
                    darkSrc={assets.obj.dark}
                 />
                 <MediaBlock showLabel={false} lightSrc={assets.wireframe.light} darkSrc={assets.wireframe.dark} />
                 <MediaBlock showLabel={false} lightSrc={assets.sitemap.light} darkSrc={assets.sitemap.dark} />
                 <Copy title="Design Solution"/>
                 <MediaBlock
                    caption="Overview"
                    title="Dashboard"
                    description="Provides an overview of your assets, statistics, recent transactions, active budgets, and account balances."
                    lightSrc={assets.dashboard.light}
                    darkSrc={assets.dashboard.dark}
                 />
            </main>
        </>
    )
}