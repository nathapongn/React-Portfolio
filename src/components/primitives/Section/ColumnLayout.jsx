// CSS
import './ColumnLayout.css'
import Wrapper from '../Wrapper/Wrapper.jsx'
import Copy from './Copy.jsx'

export default function ColumnLayout({children, showLabel=false, title, description, textAlign="left"}) {
    return(
        <Wrapper flexDirection="column">
            {showLabel &&
            <Copy className="column-label" title={title} description={description} textAlign={textAlign}/>
            }
            <div className={`column-layout`}>
            {children}
            </div>
        </Wrapper>
    )
}