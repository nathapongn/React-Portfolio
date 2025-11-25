// CSS
import './App.css'

// React
import { useContext, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeContext, ThemeContextProvider } from './context/ThemeContext.jsx'

// Components
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

// Pages
import Loading from './pages/Loading/Loading.jsx'
const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const NoPage = lazy(() => import('./pages/NoPage/NoPage.jsx'));

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
      <BrowserRouter>
          <ThemeContextProvider>
            <ThemeBody>
              <Header />
              <Suspense fallback={<Loading/>}>
                <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NoPage />} />
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