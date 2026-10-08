import { Sparkles } from 'lucide-react'

export default function MarqueeTicker() {
  const items = [
    'DESIGNS THAT SPEAKS ELEGANCE',
    '13 ARCHITECTURAL WASH BASIN MODELS',
    'HAND-GILDED 24K GOLD FILIGREE',
    'MONOLITHIC CALACATTA ITALIAN MARBLE',
    'TRANSLUCENT ILLUMINATED HONEY ONYX',
    'AEROSPACE PVD TITANIUM GOLD',
    'PROMOTER RAVI SANGHAVI • +91 81429-81429',
    'OFFICIAL CATALOG: ANSSIBOWLS.ODOO.COM',
  ]

  return (
    <div className="relative overflow-hidden bg-[#121913] py-3.5 border-y border-[#D5BA76]/25 select-none">
      {/* Left/Right Vignettes */}
      <div className="absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#121913] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#121913] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee">
        {/* Double array for seamless loop */}
        {[...items, ...items].map((text, i) => (
          <div key={i} className="flex items-center gap-4 mx-4 shrink-0">
            <span className="font-sans text-xs uppercase tracking-[0.25em] font-semibold text-[#FAF7F2]/90">
              {text}
            </span>
            <Sparkles size={11} className="text-[#D5BA76]" />
          </div>
        ))}
      </div>
    </div>
  )
}
