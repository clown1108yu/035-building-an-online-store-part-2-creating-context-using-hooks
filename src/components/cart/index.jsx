import React, { useState, useEffect } from "react"

import products from "../../data/products"

function formatPrice(price) {
  return `$${(price * 0.01).toFixed(2)}`
}

function totalPrice(items) {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
}

export default function Cart({ stripeToken }) {
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])

  function checkout() {
    stripe.redirectToCheckout({
      products: products.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://your-website.com/success",
      cancelUrl: "https://your-website.com/canceled"
    })
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Quanity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map(item => (
            <tr>
              <td>{item.name}</td>
              <td>
                <img
                  src={`/images/${item.sku}.jpg`}
                  alt={item.name}
                  width={50}
                />
              </td>
              <td>{item.quantity}</td>
              <td>{formatPrice(item.price)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ textAlign: "right" }} colspan={3}>
              Total:
            </td>
            <td>{formatPrice(totalPrice(products))}</td>
          </tr>

          <tr>
            <td style={{ textAlign: "right" }} colspan={4}>
              <button onClick={checkout}>Checkout now with Stripe</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
