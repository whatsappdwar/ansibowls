import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Eye, MessageSquare, Star, ArrowRight, X, Sparkles, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import products from '../data/products.json'

const CATEGORIES = [
  { id: 'all', label: 'All 13 Bowls' },
  { id: 'ceramic', label: 'Ceramic & Vitreous' },
  { id: 'stone', label: 'Marble & Stone' },
  { id: 'minimalist', label: 'Minimalist Matte' },
  { id: 'metallic', label: 'Metallic & PVD' },
  { id: 'artisan', label: 'Artisan & Terrazzo' },
]

export default function BowlGalleryShowcase({ onEnquiry }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedBowl, setSelectedBowl] = useState(null)
  const [activeModalImg, setActiveModalImg] = useState(0)

  const filteredBowls = products.filter((item) => {
    if (activeFilter === 'all') return true
    if (activeFilter === 'artisan') return item.collection === 'artisan' || item.collection === 'terrazzo'
    return item.collection === activeFilter
  })

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

  const getWhatsAppLink = (product) => {
    const text = encodeURIComponent(
      `Hello Ravi Sanghavi,\nI am interested in ANSSI Bowls - *${product.name}* (Catalogue Price: ₹${product.price.toLocaleString('en-IN')}).\nPlease share full catalog specifications and availability.`
    )
    return `https://wa.me/919121381429?text=${text}`
  }

  const openModal = (bowl) => {
    setSelectedBowl(bowl)
    setActiveModalImg(0)
  }

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] relative overflow-hidden" id="showcase-gallery">
      {/* Subtle architectural ambient lights */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#D5BA76]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-[#1A251C]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18221A]/5 text-[#18221A] text-xs font-sans font-medium uppercase tracking-[0.25em] mb-4 border border-[#18221A]/10"
          >
            <Sparkles size={13} className="text-[#D5BA76]" />
            <span>Architectural Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl text-[#222823] leading-tight mb-4"
          >
            13 Signature Wash Basin Bowls
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#606661] leading-relaxed max-w-xl mx-auto"
          >
            Every piece is designed to be the tactile centerpiece of your bath sanctuary. Click on any bowl to inspect its specifications.
          </motion.p>

          {/* Clean Animated Filter Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2 pt-8"
          >
            {CATEGORIES.map((cat) => {
              const count = cat.id === 'all'
                ? products.length
                : cat.id === 'artisan'
                  ? products.filter(p => p.collection === 'artisan' || p.collection === 'terrazzo').length
                  : products.filter(p => p.collection === cat.id).length

              const isActive = activeFilter === cat.id

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-sans font-medium transition-colors duration-300 flex items-center gap-1.5 focus:outline-none
                    ${isActive ? 'text-[#141C15]' : 'text-[#606661] hover:text-[#222823]'}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="gallery-filter-indicator"
                      className="absolute inset-0 bg-[#D5BA76] rounded-full shadow-sm"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono ${isActive ? 'bg-[#141C15] text-[#FAF7F2]' : 'bg-[#E8E2D8] text-[#606661]'}`}>
                    {count}
                  </span>
                </button>
              )
            })}
          </motion.div>
        </div>

        {/* 13 Bowls Grid with Stagger & Smooth Transitions */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredBowls.map((bowl, index) => (
              <motion.div
                key={bowl.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: index * 0.03 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover border border-[#E8E2D8]/80 hover:border-[#D5BA76]/60 flex flex-col justify-between transition-all duration-300"
              >
                {/* Image & Quick Action Overlay */}
                <div className="relative aspect-square overflow-hidden bg-[#F3EDE4]">
                  <img
                    src={bowl.images[0]}
                    alt={bowl.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                  />

                  {/* Corner Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="bg-[#121913]/80 backdrop-blur-md text-[#D5BA76] text-[10px] font-sans font-semibold px-2.5 py-1 rounded-md uppercase tracking-wider border border-[#D5BA76]/30">
                      {bowl.material.split('&')[0]}
                    </span>
                    {bowl.featured && (
                      <span className="bg-[#2B3B2E] text-[#FAF7F2] text-[9px] font-sans font-semibold px-2 py-0.5 rounded uppercase tracking-wider">
                        Flagship
                      </span>
                    )}
                  </div>

                  {/* Sleek Overlay Actions */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2.5 p-4">
                    <button
                      onClick={() => openModal(bowl)}
                      className="bg-white/95 hover:bg-white text-[#141C15] text-xs font-sans font-semibold px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105"
                      aria-label={`View specs for ${bowl.name}`}
                    >
                      <Eye size={14} className="text-[#2B3B2E]" />
                      <span>Quick View</span>
                    </button>
                    <a
                      href={getWhatsAppLink(bowl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-sans font-semibold px-3.5 py-2.5 rounded-xl shadow-lg flex items-center gap-1.5 transition-transform hover:scale-105"
                      aria-label="WhatsApp Promoter"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#606661] mb-1.5">
                      <span className="font-mono text-[11px] text-[#2B3B2E] font-semibold">{bowl.sizeDimension}</span>
                      <div className="flex items-center gap-1">
                        <Star size={11} className="text-[#D5BA76] fill-[#D5BA76]" />
                        <span className="font-sans font-medium text-[#222823]">{bowl.rating}</span>
                      </div>
                    </div>

                    <Link to={`/products/${bowl.slug}`}>
                      <h3 className="font-serif text-lg text-[#222823] group-hover:text-[#2B3B2E] transition-colors leading-snug line-clamp-2 mb-2 font-medium">
                        {bowl.name}
                      </h3>
                    </Link>

                    <p className="font-sans text-xs text-[#606661] line-clamp-2 mb-4 leading-relaxed">
                      {bowl.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E8E2D8] flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] text-[#606661] uppercase font-sans tracking-wider">Catalogue</span>
                      <span className="font-sans font-semibold text-[#222823] text-base">
                        {formatPrice(bowl.price)}
                      </span>
                    </div>

                    <Link
                      to={`/products/${bowl.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-[#2B3B2E] hover:text-[#D5BA76] transition-colors"
                    >
                      <span>Specifications</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Clean Direct Promoter Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-[#162017] text-[#FAF7F2] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-[#D5BA76]/30"
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FAF7F2]/10 border border-[#D5BA76]/40 p-1 flex items-center justify-center shrink-0 hidden sm:flex">
              <img
                src="/brand/anssi-symbol.png"
                alt="ANSSI Symbol"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#D5BA76] font-sans font-semibold mb-1">
                Official ANSSI Bowls Trade Service
              </p>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF7F2]">
                Architectural Specs & Bespoke Sizing
              </h3>
              <p className="text-xs sm:text-sm text-[#FAF7F2]/75 font-sans mt-1">
                Promoter <strong>Ravi Sanghavi</strong> directly assists with technical drawings, dealer terms, and sample shipments.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20please%20send%20the%20complete%20ANSSI%20Bowls%20catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1fa951] text-white px-5 py-3.5 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare size={16} />
              <span>WhatsApp (+91 91213-81429)</span>
            </a>
            <button
              onClick={onEnquiry}
              className="btn-primary"
            >
              <span>Request Quote</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Smooth Quick View Modal */}
      <AnimatePresence>
        {selectedBowl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBowl(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2"
            >
              <button
                onClick={() => setSelectedBowl(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Modal Image Display */}
              <div className="relative aspect-square md:aspect-auto bg-[#F3EDE4]">
                <img
                  src={selectedBowl.images[activeModalImg] || selectedBowl.images[0]}
                  alt={selectedBowl.name}
                  className="w-full h-full object-cover"
                />

                {selectedBowl.images.length > 1 && (
                  <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2">
                    {selectedBowl.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveModalImg(i)}
                        className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${activeModalImg === i ? 'border-[#D5BA76] scale-105' : 'border-white/70'}`}
                      >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Modal Details */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs uppercase tracking-wider font-semibold text-[#2B3B2E] bg-[#2B3B2E]/10 px-2.5 py-1 rounded">
                      {selectedBowl.material}
                    </span>
                    <span className="text-xs font-mono text-[#606661]">
                      {selectedBowl.sizeDimension}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#222823] mb-3 leading-snug">
                    {selectedBowl.name}
                  </h3>

                  <p className="font-sans text-sm text-[#606661] leading-relaxed mb-6">
                    {selectedBowl.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#222823]">Key Highlights:</p>
                    {selectedBowl.features?.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#606661]">
                        <Check size={14} className="text-[#2B3B2E] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E8E2D8]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[11px] text-[#606661] uppercase font-sans">Price</span>
                      <p className="text-2xl font-serif text-[#222823] font-medium">{formatPrice(selectedBowl.price)}</p>
                    </div>
                    <Link
                      to={`/products/${selectedBowl.slug}`}
                      className="text-xs font-sans font-semibold text-[#2B3B2E] underline hover:text-[#D5BA76]"
                    >
                      Full Details Page
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href={getWhatsAppLink(selectedBowl)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 px-4 rounded-xl text-xs font-semibold font-sans uppercase tracking-wider flex items-center justify-center gap-1.5 shadow"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp</span>
                    </a>
                    <button
                      onClick={() => { setSelectedBowl(null); onEnquiry?.() }}
                      className="bg-[#162017] hover:bg-[#223023] text-white py-3 px-4 rounded-xl text-xs font-semibold font-sans uppercase tracking-wider text-center"
                    >
                      Enquire Studio
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
