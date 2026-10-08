import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CategoryCard({ collection }) {
  return (
    <Link
      to={collection.href}
      className="group block relative overflow-hidden rounded-2xl aspect-[3/4] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      aria-label={`Explore ${collection.name}`}
    >
      {/* Image */}
      <img
        src={collection.image}
        alt={collection.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 ease-elegant group-hover:scale-108"
        style={{ '--tw-scale-x': 1.08, '--tw-scale-y': 1.08 }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        <span className="section-label text-gold/80 text-xs mb-2">{collection.subtitle}</span>
        <h3 className="font-serif text-ivory text-xl sm:text-2xl leading-tight mb-1">
          {collection.name}
        </h3>
        <p className="font-sans text-xs text-ivory/70 mb-3 line-clamp-2 hidden sm:block">
          {collection.description}
        </p>
        <div className="flex items-center gap-1.5 text-gold font-sans text-xs font-medium tracking-widest uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          Explore <ArrowRight size={13} className="mt-px" />
        </div>
      </div>

      {/* Count badge */}
      <div className="absolute top-4 right-4 bg-ivory/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
        <span className="font-sans text-xs text-charcoal font-medium">{collection.count} pieces</span>
      </div>
    </Link>
  )
}
