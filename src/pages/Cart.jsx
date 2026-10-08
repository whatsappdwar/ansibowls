import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '../context/CartContext'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { motion, AnimatePresence } from 'framer-motion'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  useEffect(() => {
    document.title = 'Your Cart — Anssi Bowls'
    window.scrollTo(0, 0)
  }, [])

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price)

  const shippingThreshold = 5000
  const shippingFree = cartTotal >= shippingThreshold
  const shippingCost = shippingFree ? 0 : 499
  const tax = Math.round(cartTotal * 0.18)
  const total = cartTotal + shippingCost + tax

  if (cartItems.length === 0) {
    return (
      <main className="pt-24 sm:pt-28 min-h-screen bg-ivory flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <div className="w-20 h-20 rounded-full bg-cream border border-border flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={32} className="text-body/40" />
          </div>
          <h1 className="font-serif text-3xl text-charcoal mb-3">Your cart is empty</h1>
          <p className="font-sans text-sm text-body leading-relaxed mb-8 max-w-xs mx-auto">
            You haven't added anything yet. Explore our collections to find your perfect piece.
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
            <h1 className="font-serif text-h2 text-charcoal mb-10">Your Cart</h1>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {/* Shipping progress */}
              {!shippingFree && (
                <Reveal>
                  <div className="bg-gold/5 border border-gold/20 rounded-2xl p-4">
                    <p className="font-sans text-sm text-charcoal mb-2">
                      Add <strong>{formatPrice(shippingThreshold - cartTotal)}</strong> more for free shipping!
                    </p>
                    <div className="w-full bg-border rounded-full h-1.5">
                      <div
                        className="bg-gold h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((cartTotal / shippingThreshold) * 100, 100)}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              )}
              {shippingFree && (
                <Reveal>
                  <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <p className="font-sans text-sm text-charcoal font-medium">You've unlocked free shipping!</p>
                  </div>
                </Reveal>
              )}

              <AnimatePresence>
                {cartItems.map((item, i) => (
                  <motion.article
                    key={`${item.id}-${item.color}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="bg-white border border-border rounded-2xl p-5 flex gap-4 sm:gap-6 items-start"
                  >
                    {/* Image */}
                    <Link to={`/products/${item.slug}`} className="shrink-0">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-cream">
                        <img
                          src={item.images?.[0]}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </Link>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="section-label text-xs text-body block mb-0.5">{item.material}</span>
                          <Link to={`/products/${item.slug}`}>
                            <h3 className="font-serif text-charcoal text-base hover:text-gold transition-colors duration-200 leading-snug">
                              {item.name}
                            </h3>
                          </Link>
                          {item.color && (
                            <p className="font-sans text-xs text-body mt-1">Colour: {item.color}</p>
                          )}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id, item.color)}
                          aria-label={`Remove ${item.name} from cart`}
                          className="text-body/40 hover:text-red-400 transition-colors duration-200 shrink-0 p-1"
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-3 gap-3 flex-wrap">
                        {/* Quantity */}
                        <div className="flex items-center border border-border rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)}
                            aria-label="Decrease quantity"
                            className="w-8 h-8 flex items-center justify-center text-body hover:bg-cream hover:text-charcoal transition-all duration-200"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center font-sans text-sm text-charcoal">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="w-8 h-8 flex items-center justify-center text-body hover:bg-cream hover:text-charcoal transition-all duration-200"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <p className="font-sans font-medium text-charcoal text-sm">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <Reveal direction="right">
                <div className="bg-cream border border-border rounded-3xl p-6 sticky top-24">
                  <h2 className="font-serif text-xl text-charcoal mb-5">Order Summary</h2>
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-body">Subtotal ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
                      <span className="text-charcoal">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-body">Shipping</span>
                      <span className={shippingFree ? 'text-gold font-medium' : 'text-charcoal'}>
                        {shippingFree ? 'FREE' : formatPrice(shippingCost)}
                      </span>
                    </div>
                    <div className="flex justify-between font-sans text-sm">
                      <span className="text-body">GST (18%)</span>
                      <span className="text-charcoal">{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between font-sans text-base font-medium">
                      <span className="text-charcoal">Total</span>
                      <span className="font-serif text-xl text-charcoal">{formatPrice(total)}</span>
                    </div>
                  </div>
                  <Button variant="primary" size="md" className="w-full justify-center mb-3">
                    Proceed to Checkout
                  </Button>
                  <Button to="/products" variant="outline" size="sm" className="w-full justify-center text-xs">
                    Continue Shopping
                  </Button>
                  <div className="mt-5 pt-4 border-t border-border">
                    <p className="font-sans text-xs text-body/70 text-center leading-relaxed">
                      Secure checkout. All transactions are encrypted and safe.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
  )
}
