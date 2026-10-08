import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Search, Heart, ShoppingBag, QrCode, ChevronDown, Menu, Phone, MessageSquare } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { navigation } from '../data/navigation'
import MobileMenu from './MobileMenu'

export default function Header({ onEnquiry, onOpenCard }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()
  const { wishlistCount } = useWishlist()
  const navigate = useNavigate()
  const location = useLocation()
  const menuTimeout = useRef(null)
  const searchRef = useRef(null)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus()
  }, [searchOpen])

  const handleMenuEnter = (label) => {
    clearTimeout(menuTimeout.current)
    setActiveMenu(label)
  }
  const handleMenuLeave = () => {
    menuTimeout.current = setTimeout(() => setActiveMenu(null), 150)
  }

  return (
    <>
      {/* Animated Scroll Progress Bar */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#C5A059] via-[#D5BA76] to-[#ECD9AB] origin-left z-50 pointer-events-none shadow-sm"
      />

      <header className="fixed top-0 inset-x-0 z-40" role="banner">
        {/* Top Announcement Bar */}
        <div className="bg-[#121913] text-[#FAF7F2] text-[11px] sm:text-xs py-1.5 px-4 border-b border-[#FAF7F2]/10 tracking-wider">
          <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-[#D5BA76]">ANSSI Bowls</span>
              <span className="hidden sm:inline text-[#FAF7F2]/50">•</span>
              <span className="italic text-[#FAF7F2]/80 font-serif">Designs That Speaks Elegance</span>
            </div>
            <div className="flex items-center gap-3 text-[11px] text-[#FAF7F2]/75 font-sans">
              <span className="hidden md:inline">Promoter: <strong>Ravi Sanghavi</strong></span>
              <a href="tel:+918142981429" className="hover:text-[#D5BA76] transition-colors flex items-center gap-1">
                <Phone size={11} className="text-[#D5BA76]" />
                <span>+91 81429-81429</span>
              </a>
              <span className="text-[#FAF7F2]/30">|</span>
              <a
                href="https://wa.me/919121381429?text=Hello%20Ravi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#25D366] transition-colors flex items-center gap-1 text-[#25D366]"
              >
                <MessageSquare size={11} />
                <span>+91 91213-81429</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div
          className={`transition-all duration-400 ${
            scrolled ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-2.5' : 'bg-[#FAF7F2]/85 sm:bg-[#FAF7F2]/90 backdrop-blur-sm py-3.5 sm:py-4'
          }`}
        >
          <div className="container-wide flex items-center justify-between gap-4">
            {/* Logo */}
            <Link
              to="/"
              aria-label="ANSSI Bowls — Home"
              className="shrink-0 flex items-center gap-3 focus:outline-none group"
            >
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#D5BA76]/50 bg-[#28362A] p-0.5 flex items-center justify-center shadow-sm">
                <img
                  src="/brand/anssi-symbol.png"
                  alt="ANSSI Bowls Symbol"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#2B2B2B] group-hover:text-[#354737] transition-colors">
                  ANSSI
                </span>
                <span className="font-sans text-[10px] font-semibold tracking-[0.35em] uppercase text-[#B08D57] -mt-0.5">
                  BOWLS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Main navigation"
            >
              {navigation.mainLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.mega ? handleMenuEnter(link.label) : null}
                  onMouseLeave={link.mega ? handleMenuLeave : null}
                >
                  {link.mega ? (
                    <button
                      className="nav-link flex items-center gap-1 px-3 py-2 text-sm font-sans font-medium text-[#2B2B2B] hover:text-[#354737] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                      aria-expanded={activeMenu === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={`transition-transform duration-300 ${activeMenu === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      className="nav-link px-3 py-2 block text-sm font-sans font-medium text-[#2B2B2B] hover:text-[#354737] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {link.mega && (
                    <AnimatePresence>
                      {activeMenu === link.label && (
                        <motion.div
                          key="mega"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          onMouseEnter={() => handleMenuEnter(link.label)}
                          onMouseLeave={handleMenuLeave}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-[#E8E0D5] shadow-2xl rounded-2xl p-6 min-w-[620px]"
                          role="menu"
                        >
                          <div className="grid grid-cols-3 gap-6">
                            {link.columns.map((col) => (
                              <div key={col.heading}>
                                <p className="text-xs uppercase font-sans font-semibold tracking-wider text-[#B08D57] mb-3">{col.heading}</p>
                                <ul className="space-y-2">
                                  {col.links.map((navLink) => (
                                    <li key={navLink.label} role="none">
                                      <Link
                                        to={navLink.href}
                                        role="menuitem"
                                        className="font-sans text-xs text-[#6B6B6B] hover:text-[#354737] hover:font-medium transition-colors duration-200 block py-0.5"
                                      >
                                        {navLink.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          {/* Bottom CTA */}
                          <div className="mt-5 pt-4 border-t border-[#E8E0D5] flex items-center justify-between">
                            <span className="font-sans text-xs text-[#6B6B6B]">Explore 13 handcrafted bowl designs</span>
                            <Link
                              to="/products"
                              className="font-sans text-xs font-semibold text-[#354737] hover:text-[#B08D57] tracking-wider uppercase flex items-center gap-1"
                            >
                              View All 13 Bowls →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Search */}
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(s => !s)}
                  aria-label="Search"
                  className="w-9 h-9 flex items-center justify-center text-[#2B2B2B] hover:text-[#B08D57] transition-colors rounded"
                >
                  <Search size={18} />
                </button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: 220 }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute right-0 top-full mt-2 overflow-hidden z-50"
                    >
                      <input
                        ref={searchRef}
                        type="search"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search 13 bowls…"
                        className="w-full bg-white border border-[#E8E0D5] px-4 py-2 font-sans text-sm text-[#2B2B2B] placeholder:text-[#6B6B6B]/50 focus:outline-none focus:ring-1 focus:ring-gold rounded-xl shadow-lg"
                        onKeyDown={e => {
                          if (e.key === 'Enter' && searchQuery.trim()) {
                            navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`)
                            setSearchOpen(false)
                          }
                          if (e.key === 'Escape') setSearchOpen(false)
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                aria-label={`Wishlist (${wishlistCount} items)`}
                className="relative w-9 h-9 flex items-center justify-center text-[#2B2B2B] hover:text-[#B08D57] transition-colors rounded"
              >
                <Heart size={18} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#B08D57] text-white text-xs rounded-full flex items-center justify-center leading-none font-sans font-medium">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                aria-label={`Cart (${cartCount} items)`}
                className="relative w-9 h-9 flex items-center justify-center text-[#2B2B2B] hover:text-[#B08D57] transition-colors rounded"
              >
                <ShoppingBag size={18} />
                {cartCount > 0 && (
                  <motion.span
                    key={cartCount}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-4 h-4 bg-[#B08D57] text-white text-xs rounded-full flex items-center justify-center leading-none font-sans font-medium"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Link>

              {/* View Business Card & Catalog QR Button */}
              <button
                onClick={onOpenCard}
                aria-label="View Business Card & Catalog QR"
                className="hidden sm:inline-flex items-center gap-1.5 bg-[#354737] hover:bg-[#28362A] text-[#FAF7F2] font-sans text-xs font-semibold tracking-wider uppercase px-3.5 py-2 rounded-lg transition-all shadow-sm"
              >
                <QrCode size={13} className="text-[#D5BA76]" />
                <span>Catalog QR</span>
              </button>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Promoter"
                className="hidden md:inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans text-xs font-semibold px-3 py-2 rounded-lg transition-all shadow-sm"
              >
                <MessageSquare size={13} />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="lg:hidden w-9 h-9 flex items-center justify-center text-[#2B2B2B] hover:text-[#B08D57] transition-colors rounded"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onEnquiry={onEnquiry}
        onOpenCard={onOpenCard}
      />
    </>
  )
}
