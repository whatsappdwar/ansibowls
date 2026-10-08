import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { ArrowRight } from 'lucide-react'
import collections from '../data/collections.json'

export default function Collections() {
  useEffect(() => {
    document.title = 'All Collections — Anssi Bowls'
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <main className="pt-24 sm:pt-28">
        <section className="bg-cream py-16 sm:py-20">
          <div className="container-wide">
            <SectionHeading
              label="Explore"
              heading="All Collections."
              subheading="From handcrafted ceramic to solid wood, stone to terracotta — find the collection that speaks to your table."
              align="center"
            />
          </div>
        </section>

        <section className="bg-ivory py-16">
          <div className="container-wide">
            {/* Bowls */}
            <div className="mb-16">
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-2xl text-charcoal">Bowls</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {collections.filter(c => c.tab === 'Bowls').map((col, i) => (
                  <Reveal key={col.id} delay={i * 0.08}>
                    <Link
                      to={col.href}
                      className="group block relative overflow-hidden rounded-2xl aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <img
                        src={col.image}
                        alt={col.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <span className="section-label text-gold/80 text-xs mb-1">{col.subtitle}</span>
                        <h3 className="font-serif text-ivory text-xl mb-1">{col.name}</h3>
                        <div className="flex items-center gap-1.5 text-gold font-sans text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Explore <ArrowRight size={12} />
                        </div>
                      </div>
                      <div className="absolute top-3 right-3 bg-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <span className="font-sans text-xs text-charcoal font-medium">{col.count} pieces</span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Other Pieces */}
            <div>
              <Reveal>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="font-serif text-2xl text-charcoal">Other Pieces</h2>
                  <div className="flex-1 h-px bg-border" />
                </div>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {collections.filter(c => c.tab === 'Other Pieces').map((col, i) => (
                  <Reveal key={col.id} delay={i * 0.08}>
                    <Link
                      to={col.href}
                      className="group block relative overflow-hidden rounded-2xl aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      <img
                        src={col.image}
                        alt={col.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-transparent" />
                      <div className="absolute inset-0 flex flex-col justify-end p-5">
                        <span className="section-label text-gold/80 text-xs mb-1">{col.subtitle}</span>
                        <h3 className="font-serif text-ivory text-xl mb-1">{col.name}</h3>
                        <div className="flex items-center gap-1.5 text-gold font-sans text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Explore <ArrowRight size={12} />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
