// React
import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Loading from './Loading/Loading.jsx'

// Pages
const Portfolio = lazy(() => import('../pages/Portfolio/Portfolio.jsx'));
const Nimbus = lazy(() => import('./projects/nimbus/Nimbus.jsx'));
const Amper = lazy(() => import('../pages/projects/Amper.jsx'));
const Flint = lazy(() => import('./projects/Flint/Flint.jsx'));
const LMWN = lazy(() => import('../pages/projects/LMWN.jsx'));
const NoPage = lazy(() => import('../pages/NoPage/NoPage.jsx'))

export default function Project() {
    return(
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="*" element={<NoPage />}/>
                <Route path="/nimbus" element={<Nimbus />}/>
                <Route path="/amper" element={<Amper />}/>
                <Route path="/flint" element={<Flint />}/>
                <Route path="/lmwn" element={<LMWN />}/>
            </Routes>
        </Suspense>
    )
}