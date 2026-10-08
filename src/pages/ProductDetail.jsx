import { useState, useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, ShoppingBag, Star, ChevronLeft, ChevronRight, Check, ArrowLeft, MessageSquare } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import Button from '../components/Button'
import ProductCard from '../components/ProductCard'
import Reveal from '../components/Reveal'
import products from '../data/products.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    if (product) {
      document.title = `${product.name} — Anssi Bowls`
      window.scrollTo(0, 0)
    }
  }, [product])

  if (!product) return <Navigate to="/products" replace />

  const wishlisted = isWishlisted(product.id)
  const related = products.filter(p => p.id !== product.id && (p.material === product.material || p.collection === product.collection)).slice(0, 4)

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedColor)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2500)
  }

  return (
    <>
      <main className="pt-24 sm:pt-28">
        <div className="container-wide py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-xs text-body">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-charcoal">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
            {/* Gallery */}
            <div className="space-y-4">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-3xl aspect-square bg-cream group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={product.images[selectedImage]}
                    alt={`${product.name} — view ${selectedImage + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                {/* Nav arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedImage(i => (i - 1 + product.images.length) % product.images.length)}
                      aria-label="Previous image"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => setSelectedImage(i => (i + 1) % product.images.length)}
                      aria-label="Next image"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-soft opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </>
                )}
              </div>
              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(i)}
                      aria-label={`View image ${i + 1}`}
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300
                        ${selectedImage === i ? 'border-gold' : 'border-border hover:border-gold/50'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <Reveal direction="right">
                <span className="section-label block mb-2">{product.material} · {product.style}</span>
                <h1 className="font-serif text-h2 text-charcoal mb-3">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={14} className={i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-border fill-border'} />
                    ))}
                  </div>
                  <span className="font-sans text-sm text-body">{product.rating} ({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-border">
                  <span className="font-serif text-3xl text-charcoal font-medium">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="font-sans text-base text-body/60 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                  {product.originalPrice && (
                    <span className="font-sans text-xs font-medium text-gold bg-gold/10 px-2 py-0.5 rounded">
                      Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="font-sans text-sm text-body leading-relaxed mb-6">{product.description}</p>

                {/* Details */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { label: 'Size', value: product.sizeDimension },
                    { label: 'Material', value: product.material },
                    { label: 'Style', value: product.style },
                    { label: 'Category', value: product.category },
                  ].map(({ label, value }) => (
                    <div key={label} className="bg-cream border border-border rounded-xl p-3">
                      <p className="font-sans text-xs text-body/70 tracking-wider uppercase mb-0.5">{label}</p>
                      <p className="font-sans text-sm text-charcoal font-medium">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Colours */}
                {product.colors && product.colors.length > 0 && (
                  <div className="mb-5">
                    <p className="font-sans text-xs font-medium text-charcoal tracking-wider uppercase mb-2">
                      Colour: <span className="text-gold">{selectedColor}</span>
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {product.colors.map(color => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-3 py-1.5 rounded-lg font-sans text-xs transition-all duration-200 border
                            ${selectedColor === color ? 'border-gold bg-gold text-ivory' : 'border-border bg-white text-body hover:border-gold hover:text-gold'}`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border border-border rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="w-10 h-10 flex items-center justify-center text-body hover:text-gold hover:bg-cream transition-all duration-200"
                    >
                      −
                    </button>
                    <span className="w-10 text-center font-sans text-sm text-charcoal font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(q => q + 1)}
                      aria-label="Increase quantity"
                      className="w-10 h-10 flex items-center justify-center text-body hover:text-gold hover:bg-cream transition-all duration-200"
                    >
                      +
                    </button>
                  </div>
                  {!product.inStock && (
                    <span className="font-sans text-xs text-red-500 font-medium">Currently out of stock</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {product.inStock ? (
                    <Button
                      onClick={handleAddToCart}
                      variant={addedToCart ? 'outline' : 'primary'}
                      size="md"
                      className="flex-1 justify-center"
                    >
                      {addedToCart ? (
                        <><Check size={15} /> Added to Cart</>
                      ) : (
                        <><ShoppingBag size={15} /> Add to Cart</>
                      )}
                    </Button>
                  ) : (
                    <Button variant="outline" size="md" className="flex-1 justify-center" disabled>
                      Out of Stock
                    </Button>
                  )}
                  <button
                    onClick={() => toggleWishlist(product)}
                    aria-label={wishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                    className={`w-12 h-12 rounded-none border flex items-center justify-center transition-all duration-300
                      ${wishlisted ? 'border-gold bg-gold text-ivory' : 'border-border text-body hover:border-gold hover:text-gold'}`}
                  >
                    <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
                  </button>
                </div>

                {/* Direct WhatsApp to Promoter Ravi Sanghavi */}
                <a
                  href={`https://wa.me/919121381429?text=${encodeURIComponent(`Hello Ravi Sanghavi,\nI am interested in ANSSI Bowls model: *${product.name}* (Price: ₹${product.price.toLocaleString('en-IN')}).\nPlease share installation dimensions, catalog specifications, and availability.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-3 bg-[#25D366] hover:bg-[#1fa951] text-white py-3 px-4 rounded-xl font-sans text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow transition-transform hover:scale-[1.01]"
                >
                  <MessageSquare size={16} />
                  <span>WhatsApp Promoter (Ravi Sanghavi)</span>
                </a>

                {/* Features */}
                {product.features && (
                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="font-sans text-xs font-medium text-charcoal tracking-wider uppercase mb-3">Features</p>
                    <ul className="space-y-2">
                      {product.features.map(f => (
                        <li key={f} className="flex items-center gap-2 font-sans text-sm text-body">
                          <Check size={13} className="text-gold shrink-0" /> {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Reveal>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <section className="mt-20 pt-12 border-t border-border" aria-label="Related products">
              <Reveal>
                <h2 className="font-serif text-2xl text-charcoal mb-8">You May Also Like</h2>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5">
                {related.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.08}>
                    <ProductCard product={p} />
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <div className="mt-10">
            <Link to="/products" className="inline-flex items-center gap-2 font-sans text-sm text-body hover:text-gold transition-colors duration-200">
              <ArrowLeft size={14} /> Back to All Products
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
