import { MessageSquare, Phone, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function ShowroomCTA({ onEnquiry }) {
  return (
    <section className="relative overflow-hidden min-h-[50vh] sm:min-h-[55vh] flex items-center bg-[#172018]" aria-label="Trade & Promoter Consultation">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/bowls/calacatta-fluted-marble-basin.jpg"
          alt="ANSSI Bowls Luxury Wash Basin Showcase"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#161F17]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#161F17]/95 via-[#161F17]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide py-20">
        <div className="max-w-xl">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#D5BA76]" />
              <span className="font-sans text-xs font-semibold text-[#D5BA76] tracking-[0.25em] uppercase">
                Trade & Architect Consultations
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h2 className="font-serif text-[#FAF7F2] leading-tight mb-4" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Designs That Speaks
              <br />
              <em className="text-[#D5BA76]">Elegance.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-sans text-[#FAF7F2]/80 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Need custom cutouts, bulk dealer supply, or architectural catalogs? Promoter <strong>Ravi Sanghavi</strong> is directly accessible for swift trade specifications and sample viewings.
            </p>
          </Reveal>
          <Reveal delay={0.4} className="flex flex-wrap items-center gap-3.5">
            <a
              href="https://wa.me/919121381429?text=Hello%20Ravi%20Sanghavi%2C%20I%20am%20interested%20in%20trade%20inquiry%20for%20ANSSI%20Bowls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1fa951] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare size={16} />
              <span>WhatsApp +91 91213-81429</span>
            </a>
            <Button onClick={onEnquiry} variant="white" size="md">
              Request Project Quote <ArrowRight size={15} />
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
