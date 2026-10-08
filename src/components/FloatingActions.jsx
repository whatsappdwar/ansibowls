import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, QrCode, Phone, X, Sparkles } from 'lucide-react'

export default function FloatingActions({ onOpenCard }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 font-sans">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-2 mb-1"
          >
            {/* Catalog QR Option */}
            <button
              onClick={() => { setExpanded(false); onOpenCard?.() }}
              className="flex items-center gap-2.5 bg-[#172018] hover:bg-[#223023] text-[#FAF7F2] px-4 py-2.5 rounded-full border border-[#D5BA76]/40 shadow-xl text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <QrCode size={15} className="text-[#D5BA76]" />
              <span>Scan Catalog QR</span>
            </button>

            {/* Direct Calling Option */}
            <a
              href="tel:+918142981429"
              className="flex items-center gap-2.5 bg-[#172018] hover:bg-[#223023] text-[#FAF7F2] px-4 py-2.5 rounded-full border border-[#D5BA76]/40 shadow-xl text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Phone size={15} className="text-[#D5BA76]" />
              <span>Call: +91 81429-81429</span>
            </a>

            {/* WhatsApp Direct */}
            <a
              href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-2.5 rounded-full shadow-xl text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <MessageSquare size={15} />
              <span>Chat with Ravi Sanghavi</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Pill */}
      <div className="relative">
        {/* Pulsing ring indicator */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        <button
          onClick={() => setExpanded(!expanded)}
          aria-label="Promoter Quick Hotline"
          className="relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-full shadow-2xl transition-transform hover:scale-105"
        >
          {expanded ? (
            <>
              <X size={18} />
              <span className="text-xs font-semibold tracking-wider uppercase">Close</span>
            </>
          ) : (
            <>
              <MessageSquare size={18} />
              <span className="text-xs font-semibold tracking-wider uppercase hidden sm:inline">WhatsApp Promoter</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}
