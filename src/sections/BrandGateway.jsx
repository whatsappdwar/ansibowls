import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Sparkles, Layers } from 'lucide-react'

export default function BrandGateway() {
  return (
    <section
      id="brand-selection"
      aria-label="Select Brand Collection"
      className="relative z-20 w-full bg-[#FAF8F5] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-y border-[#E8E0D5]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1C241D]/5 border border-[#1C241D]/10 mb-2">
            <Sparkles size={11} className="text-[#B08D57]" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-[#1C241D]/80">
              Select Brand
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1C241D] tracking-tight">
            Two Distinct Visions of Luxury
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#6B6B6B] mt-1 max-w-md mx-auto">
            Choose a portfolio to explore designer wash basins, rare stone vessels, and master ceramics.
          </p>
        </div>

        {/* Compact 2-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {/* Brand 1: ANSSI Bowls */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-2xl bg-white border border-[#D5BA76]/45 shadow-sm hover:shadow-xl hover:border-[#B08D57] transition-all duration-300 flex flex-col justify-between p-5 sm:p-6"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FAF7F2] border border-[#D5BA76]/40 text-[#8C6B28] text-[9px] font-sans font-semibold tracking-wider uppercase">
                Brand 01 • Luxury Basins
              </span>
              <span className="font-serif italic text-xs text-[#999]">01 / 02</span>
            </div>

            {/* Logo Center Display */}
            <div className="flex flex-col items-center text-center my-2 sm:my-3">
              <div className="h-14 sm:h-16 flex items-center justify-center mb-2.5">
                <img
                  src="/brand/anssi-logo-full-antique-gold.png"
                  alt="ANSSI Bowls - Designs That Speaks Elegance"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed max-w-xs">
                Countertop wash basins in Italian Calacatta marble, backlit honey onyx & 24K gold filigree.
              </p>
            </div>

            {/* Bottom Action */}
            <div className="mt-4 pt-3.5 border-t border-[#F0EAE1] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#8C6B28] font-medium">
                <Layers size={13} />
                <span>13 Signature Models</span>
              </div>

              <a
                href="#anssi-showcase"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1C241D] text-[#FAF7F2] text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 group-hover:bg-[#B08D57] group-hover:text-white"
              >
                <span>Explore ANSSI</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Clickable Overlay */}
            <a
              href="#anssi-showcase"
              className="absolute inset-0 z-20"
              aria-label="Explore ANSSI Bowls Collection"
            >
              <span className="sr-only">Explore ANSSI Bowls Collection</span>
            </a>
          </motion.div>

          {/* Brand 2: MATTEO Ceramica */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl bg-white border border-[#E8E0D5] shadow-sm hover:shadow-xl hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between p-5 sm:p-6"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-[9px] font-sans font-semibold tracking-wider uppercase">
                Brand 02 • Ceramica
              </span>
              <span className="font-serif italic text-xs text-[#999]">02 / 02</span>
            </div>

            {/* Logo Center Display */}
            <div className="flex flex-col items-center text-center my-2 sm:my-3">
              <div className="h-14 sm:h-16 flex items-center justify-center mb-2.5">
                <img
                  src="/brand/matteo-logo-light.png"
                  alt="MATTEO Ceramica"
                  className="max-h-full w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <p className="font-sans text-xs text-[#6B6B6B] leading-relaxed max-w-xs">
                Artisanal ceramic sanitaryware, designer architectural surfaces & Italian ceramic concepts.
              </p>
            </div>

            {/* Bottom Action */}
            <div className="mt-4 pt-3.5 border-t border-[#F0EAE1] flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-sans text-red-600 font-medium">
                <Layers size={13} />
                <span>Ceramics & Surfaces</span>
              </div>

              <Link
                to="/matteo"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1C241D] text-white text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 group-hover:bg-red-600 group-hover:text-white"
              >
                <span>Explore Matteo</span>
                <ArrowUpRight size={13} />
              </Link>
            </div>

            {/* Clickable Overlay */}
            <Link
              to="/matteo"
              className="absolute inset-0 z-20"
              aria-label="Explore Matteo Ceramica Portfolio"
            >
              <span className="sr-only">Explore Matteo Ceramica Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
