// CSS
import "./Loading.css"

// Lucide
import { CookingPot } from 'lucide-react';

export default function Loading() {
    return (
        <div className="loading">
            <CookingPot className="icon-subtle" size={40}/>
            <p className="text-s text-neutral-secondary">Cooking something awesome...</p>
        </div>
    )
}