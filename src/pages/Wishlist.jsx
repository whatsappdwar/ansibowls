import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Trash2, ArrowRight } from 'lucide-react'
import { useWishlist } from '../context/WishlistContext'
import { useCart } from '../context/CartContext'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist()
  const { addToCart } = useCart()

  useEffect(() => {
    document.title = 'Your Wishlist — Anssi Bowls'
    window.scrollTo(0, 0)
  }, [])

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

  if (wishlistItems.length === 0) {
    return (
      <main className="pt-24 sm:pt-28 min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <div className="w-20 h-20 rounded-full bg-cream border border-border flex items-center justify-center mx-auto mb-6">
            <Heart size={32} className="text-body/40" />
          </div>
          <h1 className="font-serif text-3xl text-charcoal mb-3">Your wishlist is empty</h1>
          <p className="font-sans text-sm text-body leading-relaxed mb-8 max-w-xs mx-auto">
            Save pieces you love and come back to them whenever you're ready.
          </p>
          <Button to="/products" variant="primary" size="md">
            Browse Collection <ArrowRight size={15} />
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-24 sm:pt-28 bg-ivory">
        <div className="container-wide py-12">
          <Reveal>
            <h1 className="font-serif text-h2 text-charcoal mb-10">
              Your Wishlist <span className="text-body font-sans text-xl">({wishlistItems.length})</span>
            </h1>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {wishlistItems.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div className="bg-white border border-border rounded-2xl overflow-hidden group hover:shadow-hover hover:-translate-y-1 transition-all duration-400">
                  <Link to={`/products/${item.slug}`} className="block">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.images?.[0]}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-4">
                    <Link to={`/products/${item.slug}`}>
                      <h3 className="font-serif text-charcoal text-base hover:text-gold transition-colors mb-1 line-clamp-2 leading-snug">
                        {item.name}
                      </h3>
                    </Link>
                    <p className="font-sans font-medium text-charcoal text-sm mb-3">{formatPrice(item.price)}</p>
                    <div className="flex gap-2">
                      {item.inStock ? (
                        <button
                          onClick={() => { addToCart(item, 1, item.colors?.[0]); removeFromWishlist(item.id) }}
                          className="flex-1 bg-gold text-ivory font-sans text-xs font-medium tracking-wider uppercase py-2.5 hover:bg-gold-dark transition-colors duration-300"
                        >
                          Move to Cart
                        </button>
                      ) : (
                        <span className="flex-1 text-center font-sans text-xs text-body py-2.5">Out of Stock</span>
                      )}
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        aria-label={`Remove ${item.name} from wishlist`}
                        className="w-9 h-9 border border-border flex items-center justify-center text-body/40 hover:text-red-400 hover:border-red-200 transition-all duration-200 rounded"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
  )
}
