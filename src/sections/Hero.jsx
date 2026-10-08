import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, MessageSquare, QrCode, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react'

const FEATURED_SLIDES = [
  {
    id: 1,
    title: 'ANSSI Signature 24K Gold',
    subtitle: 'High-Density Vitreous Emerald Porcelain with Hand-Gilded Filigree',
    tagline: 'Flagship Masterpiece',
    material: 'Vitreous China & 24K Gold',
    dimensions: '16" Dia x 6" H',
    image: '/bowls/anssi-signature-emerald-gold.jpg',
    price: '₹24,500',
    slug: 'anssi-signature-gold-filigree-basin',
  },
  {
    id: 2,
    title: 'Calacatta Gold Fluted Marble',
    subtitle: 'Monolithic Italian Calacatta Stone Carved with Vertical Pleated Fluting',
    tagline: 'Architectural Natural Stone',
    material: 'Italian Calacatta Marble',
    dimensions: '16" Dia x 5.5" H',
    image: '/bowls/calacatta-fluted-marble-basin.jpg',
    price: '₹34,000',
    slug: 'calacatta-gold-fluted-marble-basin',
  },
  {
    id: 3,
    title: 'Lumina Backlit Honey Onyx',
    subtitle: 'Rare Translucent Gemstone Onyx that Radiates Warm Ambient Light',
    tagline: 'Illuminated Gemstone Vessel',
    material: 'Natural Honey Onyx Gemstone',
    dimensions: '16" Dia x 5.5" H',
    image: '/bowls/honey-onyx-translucent-basin.jpg',
    price: '₹48,000',
    slug: 'lumina-backlit-honey-onyx-gemstone-basin',
  },
]

export default function Hero({ onEnquiry, onOpenCard }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_SLIDES.length)
    }, 6500)
    return () => clearInterval(timer)
  }, [])

  const active = FEATURED_SLIDES[currentSlide]

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center overflow-hidden bg-[#121913] text-[#FAF7F2]">
      {/* Background Image Carousel with Crossfade & Subtle Scale */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 will-change-transform"
        >
          <img
            src={active.image}
            alt={active.title}
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
          />
          {/* Deep Architectural Gradients for Professional Clarity */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121913]/95 via-[#121913]/70 to-[#121913]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121913] via-transparent to-[#121913]/50" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 container-wide pt-36 pb-24 sm:pt-44 sm:pb-32">
        <div className="max-w-2xl sm:max-w-3xl">
          {/* Brand Tagline Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FAF7F2]/10 backdrop-blur-md border border-[#D5BA76]/40 mb-6 shadow-md"
          >
            <Sparkles size={13} className="text-[#D5BA76]" />
            <span className="font-serif italic text-sm text-[#D5BA76]">Designs That Speaks Elegance</span>
            <span className="text-[#FAF7F2]/30">•</span>
            <span className="font-sans text-[11px] text-[#FAF7F2]/80 uppercase tracking-widest font-medium">ANSSI Bowls</span>
          </motion.div>

          {/* Dynamic Headline Based on Active Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1
                className="font-serif text-[#FAF7F2] leading-tight mb-4"
                style={{ fontSize: 'clamp(2.5rem, 6.5vw, 5.2rem)', letterSpacing: '-0.02em', lineHeight: '1.08' }}
              >
                {active.title.split(' ')[0]} {active.title.split(' ')[1]}
                <br />
                <em className="text-[#D5BA76] font-light italic">
                  {active.title.split(' ').slice(2).join(' ') || 'Vessel Basin'}
                </em>
              </h1>

              <p className="font-sans text-[#FAF7F2]/85 text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
                {active.subtitle}
              </p>

              {/* Specs Pill Strip */}
              <div className="flex flex-wrap items-center gap-3 mb-8 text-xs font-sans text-[#FAF7F2]/90">
                <span className="bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 px-3 py-1.5 rounded-lg">
                  Material: <strong className="text-[#D5BA76]">{active.material}</strong>
                </span>
                <span className="bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 px-3 py-1.5 rounded-lg">
                  Dimensions: <strong>{active.dimensions}</strong>
                </span>
                <span className="bg-[#FAF7F2]/10 border border-[#FAF7F2]/20 px-3 py-1.5 rounded-lg">
                  Catalogue: <strong className="text-[#D5BA76]">{active.price}</strong>
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <a
              href="#showcase-gallery"
              className="btn-primary"
            >
              <span>Explore All 13 Bowls</span>
              <ArrowRight size={15} />
            </a>

            <button
              onClick={onOpenCard}
              className="bg-white/10 hover:bg-white/20 text-[#FAF7F2] border border-[#FAF7F2]/25 backdrop-blur-md text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all hover:border-[#D5BA76]"
            >
              <QrCode size={15} className="text-[#D5BA76]" />
              <span>Catalog & Business Card</span>
            </button>

            <a
              href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20ANSSI%20Bowls%20catalog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare size={15} />
              <span>WhatsApp (+91 91213-81429)</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Interactive Slider Navigation & Progress Bar */}
      <div className="absolute bottom-8 inset-x-0 z-20">
        <div className="container-wide flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          {/* Slide Tab Buttons */}
          <div className="flex items-center gap-2 bg-[#121913]/70 backdrop-blur-md p-1.5 rounded-2xl border border-[#FAF7F2]/10">
            {FEATURED_SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-sans font-medium transition-all duration-300 flex items-center gap-2
                  ${currentSlide === index ? 'text-[#121913] font-semibold' : 'text-[#FAF7F2]/70 hover:text-[#FAF7F2]'}`}
              >
                {currentSlide === index && (
                  <motion.div
                    layoutId="hero-active-pill"
                    className="absolute inset-0 bg-[#D5BA76] rounded-xl shadow-md"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">0{index + 1}</span>
                <span className="relative z-10 hidden md:inline">{slide.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Quick Slide Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((currentSlide - 1 + FEATURED_SLIDES.length) % FEATURED_SLIDES.length)}
              aria-label="Previous Slide"
              className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#D5BA76] hover:text-[#121913] border border-[#FAF7F2]/15 flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => setCurrentSlide((currentSlide + 1) % FEATURED_SLIDES.length)}
              aria-label="Next Slide"
              className="w-9 h-9 rounded-full bg-[#FAF7F2]/10 hover:bg-[#D5BA76] hover:text-[#121913] border border-[#FAF7F2]/15 flex items-center justify-center transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
