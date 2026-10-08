import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { Heart, ShoppingBag, Star, MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProductCard({ product, className = '' }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isWishlisted } = useWishlist()
  const wishlisted = isWishlisted(product.id)

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

  const getWhatsAppLink = (p) => {
    const text = encodeURIComponent(
      `Hello Ravi Sanghavi,\nI am interested in ANSSI Bowls - *${p.name}* (Price: ₹${p.price.toLocaleString('en-IN')}).\nPlease share technical specifications and availability.`
    )
    return `https://wa.me/919121381429?text=${text}`
  }

  return (
    <motion.div
      className={`group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-hover border border-[#E8E2D8] hover:border-[#D5BA76]/60 transition-all duration-300 ${className}`}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Link to={`/products/${product.slug}`} className="block focus:outline-none">
        {/* Image */}
        <div className="relative overflow-hidden aspect-square bg-[#F3EDE4]">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
          />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            <span className="bg-[#141C15]/80 backdrop-blur-md text-[#D5BA76] text-[10px] font-sans font-semibold px-2 py-0.5 rounded uppercase tracking-wider border border-[#D5BA76]/30">
              {product.material.split('&')[0]}
            </span>
            {product.featured && (
              <span className="bg-[#263428] text-white text-[9px] font-sans font-medium px-2 py-0.5 rounded uppercase tracking-wider">
                Signature
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={(e) => { e.preventDefault(); toggleWishlist(product) }}
            aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300
              ${wishlisted ? 'bg-[#D5BA76] text-[#141C15]' : 'bg-white/80 text-[#606661] hover:bg-[#D5BA76] hover:text-[#141C15]'}`}
          >
            <Heart size={15} fill={wishlisted ? 'currentColor' : 'none'} />
          </button>

          {/* Hover Overlay Action Bar */}
          <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex">
            {product.inStock && (
              <button
                onClick={(e) => { e.preventDefault(); addToCart(product, 1, product.colors?.[0]) }}
                className="flex-1 bg-[#141C15]/95 backdrop-blur-sm text-[#FAF7F2] font-sans text-xs font-semibold tracking-wider uppercase py-3 hover:bg-[#D5BA76] hover:text-[#141C15] transition-colors duration-300 flex items-center justify-center gap-1.5"
              >
                <ShoppingBag size={13} />
                Quick Add
              </button>
            )}
            <a
              href={getWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-[#25D366] text-white px-3 py-3 flex items-center justify-center hover:bg-[#20ba5a] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={14} />
            </a>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <span className="font-mono text-[11px] text-[#263428] font-semibold">{product.sizeDimension}</span>
          <div className="flex items-center gap-1 shrink-0">
            <Star size={11} className="text-[#D5BA76] fill-[#D5BA76]" />
            <span className="text-xs font-sans text-[#222823] font-medium">{product.rating}</span>
          </div>
        </div>

        <Link to={`/products/${product.slug}`}>
          <h3 className="font-serif text-[#222823] text-base sm:text-lg leading-snug mb-2 group-hover:text-[#263428] transition-colors line-clamp-1 font-medium">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-baseline justify-between mt-2 pt-2 border-t border-[#E8E2D8]">
          <span className="font-sans font-semibold text-[#222823] text-base">
            {formatPrice(product.price)}
          </span>
          <Link
            to={`/products/${product.slug}`}
            className="text-xs font-sans font-semibold text-[#263428] hover:text-[#D5BA76] transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </motion.div>
  )
}
