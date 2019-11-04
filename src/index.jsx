import React from "react"
import ReactDOM from "react-dom"

import Store from "./components/store"
import CartProvider from "./components/cart/context"

ReactDOM.render(
  <CartProvider>
    <Store />
  </CartProvider>,
  document.getElementById("root")
)
