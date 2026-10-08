import { useState, useMemo, useEffect } from 'react'
import { useParams, useSearchParams, Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import { SlidersHorizontal, X, ChevronDown, ArrowLeft } from 'lucide-react'
import products from '../data/products.json'
import { AnimatePresence, motion } from 'framer-motion'

const MATERIALS = [...new Set(products.map(p => p.material))]
const STYLES = [...new Set(products.map(p => p.style))]
const SIZES = ['Small', 'Medium', 'Large', 'XL']

export default function ProductList() {
  const { slug } = useParams()
  const [searchParams] = useSearchParams()
  const searchQuery = (searchParams.get('search') || '').trim().toLowerCase()

  const [filters, setFilters] = useState({ material: [], style: [], size: [] })
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  // Title generation
  const pageTitle = useMemo(() => {
    if (searchQuery) return `Search: "${searchQuery}"`
    if (!slug) return 'Every Piece, in One Place.'
    const titles = {
      ceramic: 'Ceramic & Vitreous China Bowls',
      stone: 'Natural Stone & Marble Bowls',
      minimalist: 'Minimalist Matte Series',
      metallic: 'Metallic & PVD Titanium Gold Basins',
      terrazzo: 'Venetian Terrazzo Handcrafted Basins',
      artisan: 'Artisan Reactive & Terracotta Bowls',
      small: 'Small Vanity Bowls',
      medium: 'Medium Countertop Bowls (15"–17")',
      large: 'Large Architectural Basins (18"+)',
      signature: 'ANSSI Signature Flagship Series',
    }
    return titles[slug] || `${slug.charAt(0).toUpperCase() + slug.slice(1)} Collection`
  }, [slug, searchQuery])

  useEffect(() => {
    document.title = `${pageTitle} — Anssi Bowls`
  }, [pageTitle])

  const toggleFilter = (type, value) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(v => v !== value)
        : [...prev[type], value],
    }))
  }

  const clearFilters = () => setFilters({ material: [], style: [], size: [] })

  const activeFilterCount = filters.material.length + filters.style.length + filters.size.length

  const filtered = useMemo(() => {
    let list = [...products]

    // Route slug filtering
    if (slug) {
      if (['ceramic', 'wooden', 'stone'].includes(slug)) {
        list = list.filter(p => p.collection === slug || p.material.toLowerCase().includes(slug === 'wooden' ? 'wood' : slug))
      } else if (slug === 'brass') {
        list = list.filter(p => p.material.toLowerCase().includes('brass') || p.material.toLowerCase().includes('metal'))
      } else if (slug === 'serving-sets') {
        list = list.filter(p => p.collection === 'serving-sets' || p.category.toLowerCase().includes('set'))
      } else if (['dining', 'living', 'kitchen', 'outdoor'].includes(slug)) {
        list = list.filter(p => p.room && p.room.toLowerCase().includes(slug))
      } else if (['minimalist', 'artisan', 'contemporary', 'traditional'].includes(slug)) {
        list = list.filter(p => p.style && p.style.toLowerCase().includes(slug))
      } else if (['small', 'medium', 'large', 'xl'].includes(slug)) {
        list = list.filter(p => p.size && p.size.toLowerCase() === slug.toLowerCase())
      }
    }

    // Search query filtering
    if (searchQuery) {
      list = list.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.description.toLowerCase().includes(searchQuery) ||
        p.material.toLowerCase().includes(searchQuery) ||
        (p.collection && p.collection.toLowerCase().includes(searchQuery))
      )
    }

    // Facet filters
    if (filters.material.length) list = list.filter(p => filters.material.includes(p.material))
    if (filters.style.length) list = list.filter(p => filters.style.includes(p.style))
    if (filters.size.length) list = list.filter(p => filters.size.includes(p.size))

    // Sorting
    switch (sort) {
      case 'price-asc': list.sort((a, b) => a.price - b.price); break
      case 'price-desc': list.sort((a, b) => b.price - a.price); break
      case 'rating': list.sort((a, b) => b.rating - a.rating); break
      case 'featured': list.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)); break
    }
    return list
  }, [filters, sort, slug, searchQuery])

  return (
    <>
      <main className="pt-24 sm:pt-28">
        {/* Header */}
        <section className="bg-cream py-12 sm:py-16">
          <div className="container-wide">
            {slug && (
              <div className="mb-4">
                <Link to="/collections" className="inline-flex items-center gap-1.5 text-xs font-sans text-body hover:text-gold transition-colors">
                  <ArrowLeft size={14} /> Back to all collections
                </Link>
              </div>
            )}
            <SectionHeading
              label={slug ? 'Curated Collection' : searchQuery ? 'Search Results' : 'Browse All'}
              heading={pageTitle}
              subheading={
                slug
                  ? `Showing handcrafted pieces from our ${slug} catalogue.`
                  : searchQuery
                  ? `Found ${filtered.length} bowl${filtered.length === 1 ? '' : 's'} matching "${searchQuery}".`
                  : 'Every bowl is an heirloom in waiting — thrown, carved and finished by hand.'
              }
              align="center"
            />
          </div>
        </section>

        {/* Toolbar */}
        <div className="sticky top-16 z-30 bg-ivory/95 backdrop-blur-sm border-b border-border">
          <div className="container-wide py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFiltersOpen(o => !o)}
                className="flex items-center gap-2 font-sans text-sm font-medium text-charcoal border border-border px-4 py-2 rounded-lg hover:border-gold hover:text-gold transition-all duration-300"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-gold text-ivory text-xs rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1 font-sans text-xs text-body hover:text-gold transition-colors duration-200"
                >
                  <X size={12} /> Clear
                </button>
              )}
              <span className="font-sans text-xs text-body hidden sm:block">
                {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-sans text-xs text-body hidden sm:block">Sort by:</span>
              <div className="relative">
                <select
                  value={sort}
                  onChange={e => setSort(e.target.value)}
                  className="appearance-none bg-white border border-border px-3 py-2 pr-7 font-sans text-xs text-charcoal rounded-lg focus:outline-none focus:ring-1 focus:ring-gold"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-body pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {filtersOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-border bg-ivory"
              >
                <div className="container-wide py-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {[
                    { label: 'Material', key: 'material', options: MATERIALS },
                    { label: 'Style', key: 'style', options: STYLES },
                    { label: 'Size', key: 'size', options: SIZES },
                  ].map(({ label, key, options }) => (
                    <div key={key}>
                      <p className="font-sans text-xs font-medium text-charcoal tracking-wider uppercase mb-3">{label}</p>
                      <div className="flex flex-wrap gap-2">
                        {options.map(opt => (
                          <button
                            key={opt}
                            onClick={() => toggleFilter(key, opt)}
                            className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-all duration-200
                              ${filters[key].includes(opt)
                                ? 'bg-gold text-ivory border border-gold'
                                : 'bg-white border border-border text-body hover:border-gold hover:text-gold'}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Grid */}
        <section className="bg-ivory py-10">
          <div className="container-wide">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-charcoal mb-2">No products found</p>
                <p className="font-sans text-sm text-body">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                {filtered.map((product, i) => (
                  <Reveal key={product.id} delay={i * 0.04}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
