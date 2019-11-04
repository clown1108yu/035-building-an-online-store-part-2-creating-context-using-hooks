import React, { useState, createContext } from "react"

export const CartContext = createContext(null)

export default function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(item) {
    setItems(prevState => [...prevState, item])
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
