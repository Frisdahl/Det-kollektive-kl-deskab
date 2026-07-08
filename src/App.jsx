import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { Home } from './pages/Home'
import { Membership } from './pages/Membership'

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-svh flex-col bg-[#F8F5F1] text-[#2A2926]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-os" element={<About />} />
          <Route path="/medlemskab" element={<Membership />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
