// CSS
import './NoPage.css'
import { Link } from 'react-router-dom'

// Lucide
import { Rabbit } from 'lucide-react';

export default function Portfolio() {
    return(
        <>
           <div className="no-page">
                <Rabbit className="icon-subtle" size={44} />
                <h1 className="text-neutral-primary text-xl">Whoops! Page Not Found</h1>
                <p className="text-neutral-secondary text-s">Looks like the page you're looking for doesn't exist or has been moved.</p>
                <Link className="link-underline" to="/">Go to Home</Link>
           </div>
        </>
    )
}