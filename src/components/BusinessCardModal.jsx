import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, MessageSquare, Mail, Globe, Download, QrCode, ExternalLink } from 'lucide-react'

export default function BusinessCardModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative w-full max-w-2xl bg-[#1C241D] text-[#FAF7F2] rounded-2xl shadow-2xl border border-[#D5BA76]/30 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#FAF7F2]/10 bg-[#161D17]">
            <div className="flex items-center gap-4">
              <img
                src="/brand/anssi-logo-full-gold.png"
                alt="ANSSI Bowls - Designs That Speaks Elegance"
                className="h-10 w-auto object-contain"
              />
              <span className="text-[11px] font-sans text-[#D5BA76] uppercase tracking-wider hidden sm:inline-block border-l border-[#FAF7F2]/20 pl-3">
                Official Business Card & Catalog
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#D5BA76] hover:text-[#1C241D] flex items-center justify-center transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {/* Business Card Display */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-[#FAF7F2]/15 bg-black/40 group">
              <img
                src="/brand/business-card.png"
                alt="Ravi Sanghavi - ANSSI Bowls Business Card"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-black/80 backdrop-blur-md text-[#D5BA76] px-3 py-1 rounded text-xs flex items-center gap-1.5 border border-[#D5BA76]/40">
                <QrCode size={13} />
                <span>Scan QR for Catalog</span>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <a
                href="https://wa.me/919121381429?text=Hello%20Ravi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls%20catalog%20and%20designs"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#28362A] hover:bg-[#344737] border border-[#D5BA76]/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60 font-sans">WhatsApp (Promoter)</p>
                  <p className="text-sm font-semibold text-[#FAF7F2] font-sans group-hover:text-[#D5BA76]">+91 91213-81429</p>
                </div>
              </a>

              <a
                href="tel:+918142981429"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#28362A] hover:bg-[#344737] border border-[#FAF7F2]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D5BA76]/20 text-[#D5BA76] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60 font-sans">Phone 1 (Direct)</p>
                  <p className="text-sm font-semibold text-[#FAF7F2] font-sans group-hover:text-[#D5BA76]">+91 81429-81429</p>
                </div>
              </a>

              <a
                href="tel:+918142981929"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#28362A] hover:bg-[#344737] border border-[#FAF7F2]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D5BA76]/20 text-[#D5BA76] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60 font-sans">Phone 2 (Direct)</p>
                  <p className="text-sm font-semibold text-[#FAF7F2] font-sans group-hover:text-[#D5BA76]">+91 81429-81929</p>
                </div>
              </a>

              <a
                href="mailto:anssibowls@gmail.com"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#28362A] hover:bg-[#344737] border border-[#FAF7F2]/10 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D5BA76]/20 text-[#D5BA76] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-[#FAF7F2]/60 font-sans">Email</p>
                  <p className="text-xs font-semibold text-[#FAF7F2] font-sans group-hover:text-[#D5BA76] truncate">anssibowls@gmail.com</p>
                </div>
              </a>
            </div>

            {/* Official Website / Catalog link */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#FAF7F2]/10">
              <a
                href="https://anssibowls.odoo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-[#FAF7F2]/80 hover:text-[#D5BA76] font-sans transition-colors"
              >
                <Globe size={14} className="text-[#D5BA76]" />
                <span>Catalog Portal: <strong>anssibowls.odoo.com</strong></span>
                <ExternalLink size={12} />
              </a>

              <a
                href="/brand/business-card.png"
                download="ANSSI-Bowls-Ravi-Sanghavi-Card.png"
                className="inline-flex items-center gap-2 bg-[#D5BA76] hover:bg-[#c2a35d] text-[#1C241D] text-xs font-semibold font-sans uppercase tracking-wider px-4 py-2.5 rounded-lg transition-all"
              >
                <Download size={14} />
                <span>Save Business Card</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
