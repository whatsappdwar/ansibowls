import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, MessageSquare, Phone, Sparkles, CheckCircle2, FileText, QrCode } from 'lucide-react'
import Reveal from '../components/Reveal'

export default function Matteo({ onOpenCard }) {
  useEffect(() => {
    document.title = 'MATTEO Ceramica — Italian Sanitaryware & Architectural Surfaces'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-[#0A0A0C] text-[#FAF7F2] min-h-screen pt-28 pb-20">
      {/* Top Breadcrumb */}
      <div className="container-wide mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-sans text-[#FAF7F2]/60 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Hero Showcase */}
      <section className="container-wide mb-16">
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#18181C] via-[#111114] to-[#0A0A0C] p-8 sm:p-14 md:p-16 shadow-2xl text-center">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-red-600/30 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Logo Display */}
            <div className="h-28 sm:h-36 mb-6 flex items-center justify-center">
              <img
                src="/brand/matteo-logo.png"
                alt="MATTEO Ceramica"
                className="max-h-full w-auto object-contain filter drop-shadow-[0_4px_24px_rgba(255,255,255,0.25)]"
              />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-sans tracking-widest uppercase mb-4">
              <Sparkles size={13} />
              <span>Architectural Sanitaryware & Ceramics</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-white leading-tight mb-4">
              Master Ceramic Surfaces & Modern Bath Architecture
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#FAF7F2]/75 leading-relaxed max-w-2xl mb-8">
              Under the trade representation of promoter <strong>Ravi Sanghavi</strong>, MATTEO Ceramica curates precision Italian-engineered ceramics, monolithic bath vessels, and architectural vitrified slabs designed for luxury residences and hospitality suites.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20please%20send%20the%20complete%20MATTEO%20Ceramica%20catalog%20and%20price%20list"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-xl transition-transform hover:scale-105"
              >
                <MessageSquare size={16} />
                <span>Request MATTEO Catalog on WhatsApp</span>
              </a>

              <a
                href="tel:+918142981429"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
              >
                <Phone size={16} className="text-red-400" />
                <span>Call Promoter (+91 81429-81429)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container-wide mb-16">
        <div className="text-center mb-10">
          <p className="text-xs font-sans uppercase tracking-[0.25em] text-red-400 font-semibold mb-1">
            Product Portfolio
          </p>
          <h2 className="font-serif text-2xl sm:text-4xl text-white">
            MATTEO Ceramica Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Artisan Ceramic Basins',
              desc: 'High-density vitreous china countertop vessels with ultra-matte and glazed Italian finishes.',
              features: ['Anti-bacterial nano glaze', 'Zero-porosity vitrified body', 'Slim edge precision contours'],
            },
            {
              title: 'Architectural Bath Ceramics',
              desc: 'Designer wall-hung and monolithic sanitary solutions engineered for minimalist interiors.',
              features: ['Rimless flush hydraulics', 'Concealed fixing systems', 'Soft-close thermodynamic seats'],
            },
            {
              title: 'Large-Format Surfaces',
              desc: 'Sintered stone and porcelain slabs for vanity counters, wet walls, and luxury accents.',
              features: ['Zero absorption rate', 'Scratch and thermal resistant', 'Bookmatched stone veins'],
            },
          ].map((cat) => (
            <div
              key={cat.title}
              className="rounded-2xl border border-white/10 bg-[#141418] p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">{cat.title}</h3>
                <p className="font-sans text-xs sm:text-sm text-[#FAF7F2]/70 leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {cat.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs font-sans text-[#FAF7F2]/85">
                      <CheckCircle2 size={13} className="text-red-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/919121381429?text=Hello%20Ravi%2C%20please%20share%20specs%20for%20MATTEO%20Ceramica%20collections"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans font-semibold text-red-400 hover:text-white uppercase tracking-wider flex items-center gap-1.5 transition-colors"
              >
                <span>Enquire Specs & Pricing →</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Switch to ANSSI Banner */}
      <section className="container-wide">
        <div className="rounded-3xl border border-[#D5BA76]/30 bg-gradient-to-r from-[#172018] via-[#1F2C20] to-[#172018] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <img
              src="/brand/anssi-logo-full-gold.png"
              alt="ANSSI Bowls"
              className="h-16 w-auto object-contain shrink-0"
            />
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-[#D5BA76] font-semibold">
                Looking for Natural Stone & 24K Gold?
              </p>
              <h3 className="font-serif text-2xl text-white">
                Discover the ANSSI Bowls 13-Model Portfolio
              </h3>
            </div>
          </div>

          <Link
            to="/products"
            className="shrink-0 bg-[#D5BA76] hover:bg-[#ECD9AB] text-[#121913] text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all shadow"
          >
            Explore ANSSI Bowls →
          </Link>
        </div>
      </section>
    </main>
  )
}
