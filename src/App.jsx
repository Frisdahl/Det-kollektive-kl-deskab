import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { GiftCard } from './pages/GiftCard'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { Cookies, PrivacyPolicy, Terms } from './pages/Legal'
import { Membership } from './pages/Membership'
import { Stores } from './pages/Stores'

function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      window.setTimeout(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [hash, pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col bg-[#f9f4f1] text-[#2A2926]">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saadan-goer-du" element={<HowItWorks />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/butikker" element={<Stores />} />
          <Route path="/medlemskab" element={<Membership />} />
          <Route path="/gavekort" element={<GiftCard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/vilkaar" element={<Terms />} />
          <Route path="/privatlivspolitik" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
