import { useEffect } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { ArrowRight, Award, Gem, ShieldCheck, Sparkles } from 'lucide-react'

const milestones = [
  { year: 'Vision', event: 'Founded with a singular mission: Elevate wash basins into statement architectural centerpieces.' },
  { year: 'Material Innovation', event: 'Pioneered monolithic single-block Calacatta marble and backlit natural onyx basins.' },
  { year: 'Artisan 24K Gold', event: 'Introduced hand-gilded 24K gold filigree scrollwork on high-density vitreous china.' },
  { year: 'PVD Titanium', event: 'Engineered aerospace PVD champagne gold coatings with satin anti-fingerprint finishes.' },
  { year: 'Current Range', event: '13 signature luxury wash basin bowl models curated for architects and luxury suites.' },
]

const values = [
  { icon: Gem, title: 'Geological Authenticity', description: 'Genuine Italian marble, natural backlit honey onyx, and hand-chiseled Tuscan travertine.' },
  { icon: Sparkles, title: 'Artisan Precision', description: 'Hand-fluted exteriors, 24K gold filigree, and diamond-buffed silky interior basins.' },
  { icon: ShieldCheck, title: 'Sanitary Mastery', description: 'Zero-porosity vitreous china fired at 1280°C with anti-bacterial nano-glaze.' },
  { icon: Award, title: 'Elegance Redefined', description: '"Designs That Speaks Elegance" — curated for discerning luxury homes and boutique hospitality.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'About ANSSI Bowls — Designs That Speaks Elegance'
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-20 sm:pt-24 bg-[#FAF7F2]">
      {/* Hero */}
      <section className="relative h-[55vh] sm:h-[60vh] flex items-end pb-16 overflow-hidden bg-[#1C241D]" aria-label="About hero">
        <div className="absolute inset-0">
          <img
            src="/bowls/anssi-signature-emerald-gold.jpg"
            alt="ANSSI Signature Luxury Wash Basin Bowl"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#161E17] via-[#161E17]/60 to-black/40" />
        </div>
        <div className="relative z-10 container-wide">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#D5BA76] text-xs font-sans uppercase tracking-[0.25em] font-semibold">Brand Story</span>
            <span className="text-[#FAF7F2]/40">•</span>
            <span className="text-[#FAF7F2]/80 text-xs font-serif italic">Promoter: Ravi Sanghavi</span>
          </div>
          <h1 className="font-serif text-[#FAF7F2] text-4xl sm:text-6xl leading-tight">
            Designs That Speaks Elegance
          </h1>
          <p className="text-[#FAF7F2]/80 text-sm sm:text-base font-sans mt-2 max-w-xl">
            The narrative of ANSSI Bowls: Turning everyday washrooms into architectural sanctuaries through master material craftsmanship.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-ivory py-20 sm:py-28">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              label="Philosophy"
              heading="Sculptural Bowls For The Modern Architectural Sanctuary."
              align="left"
            />
            <div className="mt-8 space-y-5 font-sans text-body text-sm sm:text-base leading-relaxed">
              <Reveal delay={0.3}>
                <p>
                  At <strong className="text-charcoal">ANSSI Bowls</strong>, under the vision of promoter <strong>Ravi Sanghavi</strong>, we challenge the conventional notion of bathroom sanitaryware. We believe a wash basin is the intimate centerpiece of the space — where dawn begins and dusk unwinds.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  Each piece in our 13-bowl signature portfolio is an ode to rare earth materials: from translucent honey onyx that illuminates in ambient light, to Italian Calacatta marble fluted with geometric poise, to deep imperial emerald porcelain laced with hand-gilded 24K gold filigree.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p>
                  We collaborate with architects, luxury interior designers, and discerning homeowners across India and internationally, delivering bespoke dimensions, tailored drain fittings, and heirloom durability.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.6} className="mt-8">
              <Button to="/products" variant="primary" size="md">
                Explore All 13 Bowl Models <ArrowRight size={15} />
              </Button>
            </Reveal>
          </div>

          <Reveal direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-card border border-border aspect-[3/4]">
                <img
                  src="/bowls/honey-onyx-translucent-basin.jpg"
                  alt="Backlit Honey Onyx Basin"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-card border border-border aspect-square">
                  <img
                    src="/bowls/calacatta-fluted-marble-basin.jpg"
                    alt="Calacatta Fluted Marble Basin"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-[#28362A] text-[#FAF7F2] border border-[#D5BA76]/40 rounded-2xl p-5 shadow-card">
                  <p className="font-serif text-3xl text-[#D5BA76]">13</p>
                  <p className="font-sans text-xs tracking-wider uppercase mt-1 text-[#FAF7F2]/80">Curated Masterpieces</p>
                  <p className="font-sans text-[11px] text-[#FAF7F2]/60 mt-0.5">Ravi Sanghavi, Promoter</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section id="craftsmanship" className="bg-cream py-20 sm:py-28" aria-labelledby="values-heading">
        <div className="container-wide">
          <SectionHeading
            label="What We Stand For"
            heading="Timeless Materials. Masterful Execution."
            align="center"
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <article className="bg-white border border-border rounded-2xl p-6 hover:shadow-hover hover:-translate-y-1 transition-all duration-400 group h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#354737]/10 flex items-center justify-center mb-5 group-hover:bg-[#354737] transition-colors duration-400">
                      <v.icon size={20} className="text-[#354737] group-hover:text-[#D5BA76] transition-colors duration-400" />
                    </div>
                    <h3 className="font-serif text-charcoal text-lg mb-2">{v.title}</h3>
                    <p className="font-sans text-xs sm:text-sm text-body leading-relaxed">{v.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-ivory py-20 sm:py-28" aria-labelledby="timeline-heading">
        <div className="container-wide">
          <SectionHeading
            label="Our Legacy"
            heading="Crafted with Purpose."
            align="center"
          />
          <div className="mt-14 max-w-2xl mx-auto space-y-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.1}>
                <div className="bg-white border border-border rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:shadow-soft transition-shadow">
                  <div className="font-serif text-base sm:text-lg text-charcoal font-medium">
                    <span className="text-[#354737] font-semibold mr-2">•</span>
                    {m.event}
                  </div>
                  <span className="text-[11px] font-sans font-semibold text-[#B08D57] bg-[#FAF7F2] px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                    {m.year}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
