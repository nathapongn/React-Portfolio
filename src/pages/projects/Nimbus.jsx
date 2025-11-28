// Components 
import Cover from '../../components/Cover/Cover.jsx'
import ColumnLayout from '../../components/Section/ColumnLayout.jsx';
import Copy from '../../components/Section/Copy.jsx';

// Lucide
import { Smile } from 'lucide-react';

// Assets
import assets from '../../assets/projects/nimbus/index.js';

export default function Nimbus() {
    return (
        <>
            <main>
                <Cover 
                    lightSrc={assets.cover.light}
                    darkSrc={assets.cover.dark}
                    lightSrcMobile={assets.coverMobile.light}
                    darkSrcMobile={assets.coverMobile.dark}
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
            </main>
        </>
    )
}