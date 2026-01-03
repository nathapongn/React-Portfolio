// CSS
import './App.css'

// React
import { useContext, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext.jsx'

// Components
import Header from './components/primitives/Header/Header.jsx'
import Footer from './components/primitives/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Pages
import Loading from './pages/Loading/Loading.jsx'
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const NoPage = lazy(() => import('./pages/NoPage/NoPage.jsx'));
const Project = lazy(() => import('./pages/Project.jsx'));

function ThemeBody({children}) {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle('darkmode', darkMode);
  }, [darkMode]);

  return <>{children}</>;
}

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
          <ThemeContextProvider>
            <ThemeBody>
              <Header />
              <Suspense fallback={<Loading/>}>
                <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoPage />} />
                <Route path="/project/*" element={<Project />}/>
              </Routes>
              </Suspense>
              <Footer />
            </ThemeBody>
          </ThemeContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App