import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/Button'
import { Sparkles, Check, ArrowRight, ShieldCheck, Clock, Palette, Sliders } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SILHOUETTES = [
  {
    id: 'anssi-signature',
    name: 'ANSSI Signature 24K Gold',
    material: 'Vitreous China & 24K Gold Filigree',
    image: '/bowls/anssi-signature-emerald-gold.jpg',
    tag: 'Flagship Luxury',
  },
  {
    id: 'calacatta-fluted',
    name: 'Calacatta Fluted Marble',
    material: 'Italian Calacatta Natural Marble',
    image: '/bowls/calacatta-fluted-marble-basin.jpg',
    tag: 'Architectural Stone',
  },
  {
    id: 'honey-onyx',
    name: 'Backlit Honey Onyx',
    material: 'Translucent Gemstone Onyx',
    image: '/bowls/honey-onyx-translucent-basin.jpg',
    tag: 'Illuminated Gemstone',
  },
  {
    id: 'noir-matte',
    name: 'Noir Ultra-Thin Matte',
    material: 'Architectural Matte Ceramic',
    image: '/bowls/matte-black-minimalist-basin.jpg',
    tag: 'Minimalist Series',
  },
]

const FINISHES = [
  { id: 'mist-white', name: 'Mist White Satin', colorHex: '#F0ECE4', desc: 'Soft matte non-reflective glaze' },
  { id: 'celadon', name: 'Celadon Crackle', colorHex: '#A3B19B', desc: 'Ancient jade tint with micro-crazing' },
  { id: 'smoked-charcoal', name: 'Smoked Charcoal', colorHex: '#2B2B2B', desc: 'Velvety carbon-reduced exterior' },
  { id: 'gold-kintsugi', name: 'Kintsugi Brass Accent', colorHex: '#B08D57', desc: 'Hand-painted 24k luster line' },
]

const SIZES = [
  { id: 'petite', name: 'Petite 6"', dimension: '15 cm diameter', use: 'Tasting, appetizers, condiments' },
  { id: 'classic', name: 'Classic 10"', dimension: '25 cm diameter', use: 'Everyday salads, pasta, grain bowls' },
  { id: 'grand', name: 'Grand 14"', dimension: '35 cm diameter', use: 'Feast centerpiece, fruit display' },
]

export default function Customisation({ onEnquiry }) {
  const [selectedSilhouette, setSelectedSilhouette] = useState(SILHOUETTES[0])
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0])
  const [selectedSize, setSelectedSize] = useState(SIZES[1])
  const [engravingText, setEngravingText] = useState('ANSSI • BESPOKE')
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="bg-cream py-20 sm:py-28" aria-labelledby="customisation-heading">
      <div className="container-wide">
        <SectionHeading
          label="Bespoke Studio"
          heading="Bespoke Bowls for Discerning Homes & Hospitality."
          subheading="Design an heirloom tailored to your architectural aesthetic. Select your silhouette, bespoke glaze and personalized studio engraving."
          align="center"
        />

        {/* Step Indicator */}
        <div className="flex justify-center items-center gap-2 sm:gap-4 mt-12 mb-10 max-w-xl mx-auto">
          {[
            { num: 1, label: 'Silhouette' },
            { num: 2, label: 'Finish & Glaze' },
            { num: 3, label: 'Size & Monogram' },
          ].map(s => (
            <button
              key={s.num}
              onClick={() => setActiveStep(s.num)}
              className={`flex-1 flex items-center gap-2 p-2.5 sm:p-3 rounded-xl border text-left transition-all duration-300 ${
                activeStep === s.num
                  ? 'bg-white border-gold shadow-soft text-charcoal'
                  : 'bg-ivory/60 border-border text-body hover:bg-white'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full text-xs font-serif flex items-center justify-center shrink-0 ${
                  activeStep === s.num ? 'bg-gold text-ivory' : 'bg-charcoal/10 text-charcoal'
                }`}
              >
                {s.num}
              </span>
              <span className="font-sans text-xs font-medium truncate">{s.label}</span>
            </button>
          ))}
        </div>

        {/* Interactive Customizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white border border-border rounded-3xl p-6 sm:p-8 shadow-soft">
            {activeStep === 1 && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif text-xl text-charcoal">Step 1: Choose Silhouette & Material</h3>
                  <span className="text-xs font-sans text-gold uppercase tracking-wider">Step 1 of 3</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SILHOUETTES.map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSelectedSilhouette(item)}
                      className={`text-left p-4 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                        selectedSilhouette.id === item.id
                          ? 'border-gold bg-cream/30 ring-2 ring-gold/20'
                          : 'border-border hover:border-gold/50 bg-white'
                      }`}
                    >
                      <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-cream">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-serif text-base text-charcoal font-medium">{item.name}</p>
                          <p className="font-sans text-xs text-body">{item.material}</p>
                        </div>
                        {selectedSilhouette.id === item.id && (
                          <div className="w-5 h-5 rounded-full bg-gold text-ivory flex items-center justify-center">
                            <Check size={12} />
                          </div>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex justify-end">
                  <Button variant="primary" size="sm" onClick={() => setActiveStep(2)}>
                    Continue to Finishes <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif text-xl text-charcoal">Step 2: Select Glaze & Surface Finish</h3>
                  <span className="text-xs font-sans text-gold uppercase tracking-wider">Step 2 of 3</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FINISHES.map(f => (
                    <button
                      key={f.id}
                      onClick={() => setSelectedFinish(f)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 ${
                        selectedFinish.id === f.id
                          ? 'border-gold bg-cream/30 ring-2 ring-gold/20'
                          : 'border-border hover:border-gold/50 bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-7 h-7 rounded-full border border-charcoal/20 shadow-inner shrink-0"
                          style={{ backgroundColor: f.colorHex }}
                        />
                        <p className="font-serif text-base text-charcoal font-medium">{f.name}</p>
                      </div>
                      <p className="font-sans text-xs text-body leading-relaxed">{f.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(1)}
                    className="text-xs font-sans text-body hover:text-charcoal uppercase tracking-wider"
                  >
                    ← Back to Silhouettes
                  </button>
                  <Button variant="primary" size="sm" onClick={() => setActiveStep(3)}>
                    Continue to Engraving <ArrowRight size={14} />
                  </Button>
                </div>
              </div>
            )}

            {activeStep === 3 && (
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif text-xl text-charcoal">Step 3: Size & Custom Engraving</h3>
                  <span className="text-xs font-sans text-gold uppercase tracking-wider">Step 3 of 3</span>
                </div>

                {/* Size options */}
                <div className="space-y-3 mb-6">
                  <label className="block text-xs font-sans text-charcoal uppercase tracking-wider font-medium">
                    Select Diameter & Purpose
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {SIZES.map(s => (
                      <button
                        key={s.id}
                        onClick={() => setSelectedSize(s)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          selectedSize.id === s.id
                            ? 'border-gold bg-cream/40 ring-1 ring-gold'
                            : 'border-border hover:border-gold/40'
                        }`}
                      >
                        <p className="font-serif text-base text-charcoal font-medium">{s.name}</p>
                        <p className="font-sans text-xs text-gold mt-0.5">{s.dimension}</p>
                        <p className="font-sans text-[11px] text-body mt-2 leading-snug">{s.use}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monogram input */}
                <div className="space-y-2 mb-6">
                  <label htmlFor="custom-engraving-input" className="block text-xs font-sans text-charcoal uppercase tracking-wider font-medium">
                    Studio Stamp or Monogram (Optional)
                  </label>
                  <input
                    id="custom-engraving-input"
                    type="text"
                    maxLength={32}
                    value={engravingText}
                    onChange={e => setEngravingText(e.target.value.toUpperCase())}
                    placeholder="e.g. VILLA CASABLANCA • 2026"
                    className="w-full bg-cream/40 border border-border px-4 py-3 rounded-xl font-sans text-sm text-charcoal tracking-widest placeholder:text-body/40 focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                  <p className="font-sans text-[11px] text-body/70">
                    Hand-incised under glaze at base of bowl before final firing.
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveStep(2)}
                    className="text-xs font-sans text-body hover:text-charcoal uppercase tracking-wider"
                  >
                    ← Back to Finishes
                  </button>
                  <Button variant="primary" size="sm" onClick={onEnquiry}>
                    <Sparkles size={14} /> Enquire for Custom Orders
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Live Preview Column */}
          <div className="lg:col-span-5 bg-ivory border border-border rounded-3xl p-6 sm:p-8 shadow-soft sticky top-28">
            <div className="flex items-center justify-between mb-4">
              <span className="font-sans text-xs tracking-widest text-gold uppercase font-medium">
                Live Studio Mockup
              </span>
              <span className="inline-flex items-center gap-1 text-[11px] font-sans text-body bg-white px-2.5 py-1 rounded-full border border-border">
                <Clock size={12} className="text-gold" /> 14–21 Days Lead Time
              </span>
            </div>

            {/* Visual preview box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-cream mb-6 border border-border/80">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedSilhouette.id}
                  src={selectedSilhouette.image}
                  alt={selectedSilhouette.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Finish swatch indicator */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2 border border-border shadow-sm">
                <span
                  className="w-3.5 h-3.5 rounded-full border border-charcoal/20"
                  style={{ backgroundColor: selectedFinish.colorHex }}
                />
                <span className="text-xs font-sans text-charcoal font-medium">{selectedFinish.name}</span>
              </div>

              {/* Monogram watermark overlay */}
              {engravingText && (
                <div className="absolute bottom-3 right-3 bg-charcoal/70 backdrop-blur-sm text-ivory text-[10px] font-sans tracking-[0.2em] px-2.5 py-1 rounded">
                  {engravingText}
                </div>
              )}
            </div>

            {/* Selected summary */}
            <div className="space-y-3 pb-6 border-b border-border">
              <div className="flex justify-between text-xs font-sans">
                <span className="text-body">Selected Silhouette:</span>
                <span className="text-charcoal font-medium">{selectedSilhouette.name}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-body">Material:</span>
                <span className="text-charcoal font-medium">{selectedSilhouette.material}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-body">Glaze Finish:</span>
                <span className="text-charcoal font-medium">{selectedFinish.name}</span>
              </div>
              <div className="flex justify-between text-xs font-sans">
                <span className="text-body">Size / Volume:</span>
                <span className="text-charcoal font-medium">{selectedSize.name}</span>
              </div>
              {engravingText && (
                <div className="flex justify-between text-xs font-sans">
                  <span className="text-body">Custom Engraving:</span>
                  <span className="text-gold font-medium tracking-wider">{engravingText}</span>
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-6 space-y-3">
              <Button
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={onEnquiry}
              >
                <Sparkles size={16} /> Enquire for Custom Orders
              </Button>
              <p className="text-center font-sans text-[11px] text-body/70">
                Studio visits available at Bangalore, Mumbai & Delhi showrooms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
