import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('anssi-cart')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('anssi-cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product, quantity = 1, color = null) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.color === color)
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.color === color
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { ...product, quantity, color }]
    })
  }

  const removeFromCart = (id, color = null) => {
    setCartItems(prev => prev.filter(item => !(item.id === id && item.color === color)))
  }

  const updateQuantity = (id, color, quantity) => {
    if (quantity < 1) {
      removeFromCart(id, color)
      return
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.color === color ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setCartItems([])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      cartTotal,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
