// CSS
import './Portfolio.css';

// Components
import Wrapper from "../../components/primitives/Wrapper/Wrapper.jsx";
import Card from '../../components/primitives/Card/Card.jsx';

// React
import { useNavigate } from "react-router-dom"

// Assets
import assets from '../../assets/thumbnails/index.js'

export default function Portfolio() {
    const navigate = useNavigate();

    return(
        <main>
            <Wrapper>
                <div className="portfolio">
                    <div className="hero-banner">
                        <div className="hero-banner-label">
                            <h1 className="hero-banner-title text-xxxl text-neutral-primary">Hello, I'm Nat</h1>
                            <p className="hero-banner-description text-m text-neutral-secondary">
                            A designer with 4+ years of experience designing complex digital products—rooted in finance and internal tools, applicable anywhere.
                            <br /><br />
                            I believe in designing for the beautifully imperfect ways humans interact with technology, rather than some ideal.</p>
                        </div>
                    </div>
                    <div className="projects">
                        <Card 
                            description="Sophisticated personal finance management." 
                            modeSupport={true} 
                            thumbnailType="video" 
                            darkSrc={assets.nimbusDark}
                            lightSrc={assets.nimbusLight}
                            thumbnailClass="nimbus"
                            onClick={() => navigate("project/nimbus")}
                        >Nimbus
                        </Card>

                        <Card 
                            description="Making investing less intimidating by design." 
                            modeSupport={true} 
                            thumbnailType="video" 
                            darkSrc={assets.flintDark}
                            lightSrc={assets.flintLight}
                            thumbnailClass="flint"
                            onClick={() => navigate("project/flint")}
                        >Flint
                        </Card>

                        <Card 
                            description="Unifying public EV chargers."
                            thumbnailType="image"
                            lightSrc={assets.amperLight}
                            gradient={true}
                            gradientSrc={assets.amperGradient}
                            thumbnailClass="amper"
                            onClick={() => navigate("project/amper")}
                        >Amper
                        </Card>
                        <Card 
                            description="UX Design Internship " 
                            thumbnailType="image"
                            lightSrc={assets.lmwn}
                            gradient={true}
                            gradientSrc={assets.lmwnGradient}
                            thumbnailClass="lmwn"
                            onClick={() => navigate("project/lmwn")}
                        >LINE MAN Wongnai
                        </Card>
                    </div>
                </div>
            </Wrapper>
        </main>
    )
}