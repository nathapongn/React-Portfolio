import MediaBlock from '../../components/MediaBlock/MediaBlock.jsx'
import ColumnLayout from '../../components/Section/ColumnLayout.jsx';
import Copy from '../../components/Section/Copy.jsx';
import Divider from '../../components/Divider/Divider.jsx';
import Cover from '../../components/Cover/Cover.jsx'
import Wrapper from '../../components/Wrapper/Wrapper.jsx'

// Assets
import assets from '../../assets/projects/lmwn/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover
                    className="lmwn"
                    lightSrc={assets.cover}
                    lightSrcMobile={assets["cover-mobile"]}
                />
                <ColumnLayout>
                    <Copy
                        title="LMWN Junior '22"
                        titleSize="text-xxl"
                        description="During the summer of 2022, I was offered the opportunity to intern as a UX/UI Designer at one of Thailand's most popular food delivery platforms, LINE MAN Wongnai."
                        descriptionSize="text-m"
                        cols="6"
                    />
                    <Copy
                        title="Duration"
                        titleSize="text-m strong"
                        description="Jun 22 - Aug 22"
                        descriptionSize="text-m"
                        cols="3"
                    />
                </ColumnLayout>
                <Divider />
                <MediaBlock
                    lightSrc={assets["lm-1"]}
                    title="Responsibilities"
                    description="I was placed on the Restaurant Team, responsible for Wongnai Merchant App (WMA) that over 700,000 merchants around Thailand use to manage their stores and connect to customers.
                    
                    I was given tasks to help merchants improve their ad postings' effectiveness, design a coupon creation journey to allow merchants to easily offer discounts on menus, and create a new merchant ranking menu to help them keep track of their ranks and available rewards."
                    mediaCaption="Intern Goodies"
                ></MediaBlock>
                <MediaBlock
                    lightSrc={assets["lm-2"]}
                    mirror={true}
                    title="Learning"
                    description="My time at LINE MAN Wongnai was both educational and thrilling. I experienced a fast-paced startup environment with tight deadlines and genuine cross-functional collaboration. Working with real statistics and challenging problems, paired with business and development constraints, provided invaluable experience as a designer.
                    
                    I learned the importance of design iterations and thinking on my feet. It also made me realize, early on in my career, how much more there is to experience and learn from others."
                    mediaCaption="LMWN Design Team"
                ></MediaBlock>
                
                <ColumnLayout>
                    <MediaBlock withWrapper={false} orientation="vertical" cols="4" showLabel={false} lightSrc={assets["lm-3"]}/>
                    <MediaBlock withWrapper={false} orientation="vertical" cols="4" showLabel={false} lightSrc={assets["lm-4"]}/>
                    <MediaBlock withWrapper={false} orientation="vertical" cols="4" showLabel={false} lightSrc={assets["lm-5"]}/>
                </ColumnLayout>
            </main>
        </>
    )
}