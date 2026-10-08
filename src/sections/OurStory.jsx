import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function OurStory() {
  return (
    <section className="bg-ivory py-20 sm:py-28" aria-labelledby="story-heading">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <Reveal direction="left" className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-3xl aspect-[4/5] shadow-hover border border-border">
              <img
                src="/bowls/travertine-stone-carved-basin.jpg"
                alt="Handcrafted luxury wash basin bowl by ANSSI"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white border border-[#D5BA76]/40 rounded-2xl px-6 py-5 shadow-2xl">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles size={16} className="text-[#D5BA76]" />
                <p className="font-serif text-2xl text-charcoal leading-none">ANSSI</p>
              </div>
              <p className="font-sans text-[11px] text-[#354737] tracking-wider uppercase font-semibold">Promoter: Ravi Sanghavi</p>
              <div className="w-8 h-px bg-[#D5BA76] my-2" />
              <p className="font-sans text-xs text-body leading-relaxed">Designs That Speaks Elegance</p>
            </div>
          </Reveal>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              label="Our Philosophy"
              heading="A Wash Basin Should Not Merely Be a Fixture. It Should Be Fine Art."
              align="left"
            />
            <div className="mt-8 space-y-5 font-sans text-body leading-relaxed text-sm sm:text-base">
              <Reveal delay={0.4}>
                <p>
                  At <strong className="text-charcoal font-semibold">ANSSI Bowls</strong>, we believe every morning ritual deserves architectural grace. Under the leadership of promoter <strong>Ravi Sanghavi</strong>, we design and curate tabletop wash basins that transform ordinary washrooms into private sanctuaries.
                </p>
              </Reveal>
              <Reveal delay={0.5}>
                <p>
                  Our collection unites geological treasures with master ceramic craftsmanship: monolithic hand-carved blocks of <em>Italian Calacatta</em> marble, raw chiseled <em>Tuscan travertine</em>, translucent backlit <em>honey onyx</em>, and high-fired vitreous china finished with <em>24K gold filigree</em>.
                </p>
              </Reveal>

              {/* Highlights pills */}
              <Reveal delay={0.55}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="bg-white border border-border rounded-xl p-3 shadow-sm">
                    <p className="font-serif text-charcoal text-sm font-semibold">Rare Stones</p>
                    <p className="font-sans text-[11px] text-body">Calacatta, Onyx & Travertine</p>
                  </div>
                  <div className="bg-white border border-border rounded-xl p-3 shadow-sm">
                    <p className="font-serif text-charcoal text-sm font-semibold">24K Gilded Gold</p>
                    <p className="font-sans text-[11px] text-body">Hand-applied filigree art</p>
                  </div>
                  <div className="bg-white border border-border rounded-xl p-3 shadow-sm">
                    <p className="font-serif text-charcoal text-sm font-semibold">Bespoke Specs</p>
                    <p className="font-sans text-[11px] text-body">For luxury residences & villas</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <p className="font-medium text-charcoal italic font-serif text-lg pt-2">
                  "Every curve holds water; every texture holds timeless dignity."
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.7} className="mt-8">
              <Button to="/about" variant="outline" size="md">
                Learn About Our Materials <ArrowRight size={15} />
              </Button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
