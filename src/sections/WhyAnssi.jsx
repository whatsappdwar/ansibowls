import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { Sparkles, ShieldCheck, Flame, Droplets, Gem } from 'lucide-react'

const features = [
  {
    icon: Gem,
    title: 'Rare Natural Stone & Marble',
    description:
      'Hand-carved from monolithic blocks of Italian Calacatta marble, Spanish Nero Marquina, and translucent backlit honey onyx.',
  },
  {
    icon: Flame,
    title: '1280°C Vitreous Kiln Firing',
    description:
      'High-density ceramic fired at extreme temperatures for zero porosity, supreme durability, and thermal shock resistance.',
  },
  {
    icon: Sparkles,
    title: '24K Gold & PVD Titanium',
    description:
      'Hand-gilded 24K gold filigree scrollwork and aerospace-grade PVD champagne gold coatings engineered against wear and oxidation.',
  },
  {
    icon: Droplets,
    title: 'Splash-Free Fluid Dynamics',
    description:
      'Every curve is hydrodynamically shaped to guide water silently to the waste outlet without backsplash on your luxury vanity.',
  },
  {
    icon: ShieldCheck,
    title: 'Anti-Bacterial Nano Glaze',
    description:
      'Ultra-smooth hydrophobic surfaces that resist limescale, soap scum, and bacteria with a gentle wipe of a soft microfiber cloth.',
  },
]

export default function WhyAnssi() {
  return (
    <section className="bg-cream py-20 sm:py-28" aria-labelledby="why-anssi-heading">
      <div className="container-wide">
        <SectionHeading
          label="Why Choose ANSSI Bowls"
          heading="Designs That Speaks Elegance."
          subheading="Five engineering and design hallmarks that make ANSSI wash basin bowls the premier choice for architects, luxury interior designers, and discerning homeowners."
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feat, i) => (
            <Reveal key={feat.title} delay={i * 0.1} className="h-full">
              <article className="bg-white border border-border rounded-2xl p-6 h-full group hover:shadow-hover hover:-translate-y-1 transition-all duration-400">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#354737]/10 flex items-center justify-center mb-5 group-hover:bg-[#354737] group-hover:scale-110 transition-all duration-400">
                  <feat.icon size={22} className="text-[#354737] group-hover:text-[#D5BA76] transition-colors duration-400" />
                </div>
                <h3 className="font-serif text-charcoal text-lg leading-snug mb-3">{feat.title}</h3>
                <p className="font-sans text-xs text-body leading-relaxed">{feat.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
