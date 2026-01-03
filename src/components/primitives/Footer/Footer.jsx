// CSS
import './Footer.css';

// Components
import Wrapper from '../Wrapper/Wrapper.jsx'
import Divider from '../Divider/Divider.jsx'
import Icon from '../Icon/Icon.jsx'

// Lucide
import { Linkedin, Github, Copyright } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
        <footer>
            <Divider />
            <Wrapper flexDirection='column'>
                <div className='footer-body'>
                    <div className="footer-body-content">
                        <div className="footer-body-text">
                            <h1 className="text-xl text-neutral-primary">Liking what you're seeing?</h1>
                            <p className="text-s text-neutral-secondary">Let's work together!</p>
                        </div>
                        <div className="footer-social-profile">
                        <Icon tooltip="Go to my Linkedin Profile">
                            <a 
                            href="https://www.linkedin.com/in/nathapongn/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Linkedin className="icon-enabled" />
                        </a>
                        </Icon>
                        <Icon tooltip="Go to my Github Profile">
                        <a 
                            href="https://github.com/nathapongn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <Github className="icon-enabled" />
                        </a>
                        </Icon>
                        </div>
                    </div>
                    <Divider />
                    <p className="text-s text-neutral-secondary">Designed in Figma, made with ReactJS.</p>
                </div>
            </Wrapper>
        </footer>
        <div className="copyright">
            <Divider />
            <Wrapper>
                <div className='copyright-content'>
                    <Icon>
                        <Copyright className="icon-enabled" size={16}/>
                    </Icon>
                    <p className="text-xs text-neutral-placeholder">{currentYear} Nathapong Nurae. All rights reserved.</p>
                </div>
                <p className="text-xs text-neutral-placeholder">V1.0.1</p>
            </Wrapper>
        </div>
        </>
        
    )
}