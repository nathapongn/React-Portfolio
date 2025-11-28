// CSS
import './ColumnLayout.css'
import Wrapper from '../Wrapper/Wrapper.jsx'

export default function ColumnLayout({children}) {
    return(
        <Wrapper>
            <div className={`column-layout`}>
            {children}
            </div>
        </Wrapper>
    )
}