import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, QrCode, Phone, MessageSquare, Mail, Globe } from 'lucide-react'
import { navigation } from '../data/navigation'

export default function MobileMenu({ isOpen, onClose, onEnquiry, onOpenCard }) {
  const [openAccordion, setOpenAccordion] = useState(null)

  const toggleAccordion = (label) =>
    setOpenAccordion(prev => prev === label ? null : label)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          {/* Drawer */}
          <motion.div
            key="drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-[#FAF7F2] z-50 overflow-y-auto lg:hidden flex flex-col justify-between"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D5] bg-[#1C241D] text-[#FAF7F2]">
                <div className="flex items-center gap-3">
                  <img
                    src="/brand/anssi-symbol.png"
                    alt="ANSSI Symbol"
                    className="w-9 h-9 rounded object-contain bg-[#FAF7F2]/10 p-0.5 border border-[#D5BA76]/40"
                  />
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#FAF7F2]">ANSSI Bowls</h3>
                    <p className="font-sans text-[10px] text-[#D5BA76] tracking-wider uppercase">Designs That Speaks Elegance</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D5BA76] hover:text-[#1C241D] flex items-center justify-center text-[#FAF7F2] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Nav Links */}
              <nav className="px-5 py-4">
                {navigation.mainLinks.map((link) => (
                  <div key={link.label} className="border-b border-[#E8E0D5]/70 last:border-0">
                    {link.mega ? (
                      <>
                        <button
                          onClick={() => toggleAccordion(link.label)}
                          className="w-full flex items-center justify-between py-3.5 font-sans text-sm font-medium text-[#2B2B2B] hover:text-[#354737] transition-colors"
                          aria-expanded={openAccordion === link.label}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={16}
                            className={`text-[#6B6B6B] transition-transform duration-300 ${openAccordion === link.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence>
                          {openAccordion === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-3 pl-3 space-y-3">
                                {link.columns.map((col) => (
                                  <div key={col.heading}>
                                    <p className="text-[11px] uppercase tracking-wider text-[#B08D57] font-semibold mb-1">{col.heading}</p>
                                    <ul className="space-y-1.5 pl-2">
                                      {col.links.map((navLink) => (
                                        <li key={navLink.label}>
                                          <Link
                                            to={navLink.href}
                                            onClick={onClose}
                                            className="font-sans text-xs text-[#6B6B6B] hover:text-[#354737] block py-0.5"
                                          >
                                            {navLink.label}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.href}
                        onClick={onClose}
                        className="flex items-center py-3.5 font-sans text-sm font-medium text-[#2B2B2B] hover:text-[#354737] transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Promoter Direct Details Card */}
              <div className="mx-5 p-4 rounded-xl bg-[#28362A] text-[#FAF7F2] border border-[#D5BA76]/30 mb-4">
                <p className="text-[10px] text-[#D5BA76] uppercase tracking-wider font-semibold">Promoter Direct Contact</p>
                <h4 className="font-serif text-base font-semibold text-[#FAF7F2] mt-0.5">Ravi Sanghavi</h4>
                <div className="mt-2.5 space-y-2 text-xs">
                  <a href="tel:+918142981429" className="flex items-center gap-2 hover:text-[#D5BA76]">
                    <Phone size={13} className="text-[#D5BA76]" />
                    <span>+91 81429-81429 / 81929</span>
                  </a>
                  <a
                    href="https://wa.me/919121381429?text=Hello%20Ravi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#25D366] hover:underline"
                  >
                    <MessageSquare size={13} />
                    <span>WhatsApp: +91 91213-81429</span>
                  </a>
                  <a href="mailto:anssibowls@gmail.com" className="flex items-center gap-2 hover:text-[#D5BA76]">
                    <Mail size={13} className="text-[#D5BA76]" />
                    <span>anssibowls@gmail.com</span>
                  </a>
                  <a href="https://anssibowls.odoo.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#D5BA76] hover:underline">
                    <Globe size={13} />
                    <span>anssibowls.odoo.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 border-t border-[#E8E0D5] space-y-2.5 bg-white">
              <button
                onClick={() => { onClose(); onOpenCard?.() }}
                className="w-full bg-[#354737] text-[#FAF7F2] font-sans text-xs font-semibold tracking-wider uppercase py-3.5 rounded-xl flex items-center justify-center gap-2 hover:bg-[#28362A] transition-colors"
              >
                <QrCode size={15} className="text-[#D5BA76]" />
                <span>View Card & Catalog QR</span>
              </button>
              <button
                onClick={() => { onClose(); onEnquiry?.() }}
                className="w-full bg-[#D5BA76] text-[#1C241D] font-sans text-xs font-semibold tracking-wider uppercase py-3.5 rounded-xl hover:bg-[#c2a35d] transition-colors"
              >
                Enquire Studio
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
