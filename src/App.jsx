import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { CartProvider } from './context/CartContext'
import { WishlistProvider } from './context/WishlistContext'
import Header from './components/Header'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ShowroomLocator from './pages/ShowroomLocator'
import Collections from './pages/Collections'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Wishlist from './pages/Wishlist'
import Matteo from './pages/Matteo'
import EnquiryModal from './components/EnquiryModal'
import BusinessCardModal from './components/BusinessCardModal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppLayout() {
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const [cardOpen, setCardOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-ivory">
      <Header
        onEnquiry={() => setEnquiryOpen(true)}
        onOpenCard={() => setCardOpen(true)}
      />
      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onEnquiry={() => setEnquiryOpen(true)}
                onOpenCard={() => setCardOpen(true)}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/contact"
            element={<Contact onOpenCard={() => setCardOpen(true)} />}
          />
          <Route path="/showroom" element={<ShowroomLocator />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/collections/:slug" element={<ProductList />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/matteo" element={<Matteo onOpenCard={() => setCardOpen(true)} />} />
          {/* Fallback */}
          <Route
            path="*"
            element={
              <Home
                onEnquiry={() => setEnquiryOpen(true)}
                onOpenCard={() => setCardOpen(true)}
              />
            }
          />
        </Routes>
      </div>
      <Footer onOpenCard={() => setCardOpen(true)} />
      <FloatingActions onOpenCard={() => setCardOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <BusinessCardModal isOpen={cardOpen} onClose={() => setCardOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <ScrollToTop />
          <AppLayout />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  )
}
