import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './pages/About'
import { AdminAddBlog } from './pages/AdminAddBlog'
import { AdminAddProduct } from './pages/AdminAddProduct'
import { AdminDashboard } from './pages/AdminDashboard'
import { AdminGiftCards } from './pages/AdminGiftCards'
import { AdminItems } from './pages/AdminItems'
import { AdminLogin } from './pages/AdminLogin'
import { AdminProducts } from './pages/AdminProducts'
import { Cancellation } from './pages/Cancellation'
import { Contact } from './pages/Contact'
import { FAQ } from './pages/FAQ'
import { GiftCard } from './pages/GiftCard'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { Cookies, PrivacyPolicy, Terms } from './pages/Legal'
import { Membership } from './pages/Membership'
import { Products } from './pages/Products'
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

function AppFrame() {
  const { pathname } = useLocation()
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <div className="flex min-h-svh flex-col bg-background text-heading">
      <ScrollToTop />
      {isAdminRoute ? null : <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saadan-goer-du" element={<HowItWorks />} />
        <Route path="/om-os" element={<About />} />
        <Route path="/butikker" element={<Stores />} />
        <Route path="/medlemskab" element={<Membership />} />
        <Route path="/gavekort" element={<GiftCard />} />
        <Route path="/produkter" element={<Products />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/blog/tilfoej" element={<AdminAddBlog />} />
        <Route path="/admin/gavekort" element={<AdminGiftCards />} />
        <Route path="/admin/produkter" element={<AdminProducts />} />
        <Route path="/admin/produkter/tilfoej" element={<AdminAddProduct />} />
        <Route path="/admin/varer" element={<AdminItems />} />
        <Route path="/afmeld-medlemskab" element={<Cancellation />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/vilkaar" element={<Terms />} />
        <Route path="/privatlivspolitik" element={<PrivacyPolicy />} />
      </Routes>
      {isAdminRoute ? null : <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppFrame />
    </BrowserRouter>
  )
}

export default App
