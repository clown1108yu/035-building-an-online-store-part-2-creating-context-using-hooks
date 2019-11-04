import React, { useState, useEffect } from "react"

const items = [
  {
    sku: "sku_G3G6Y94PnHPuxR",
    quantity: 1,
    price: 220000,
    name: "Sony a7 III Full-frame Mirrorless Camera"
  },
  {
    sku: "sku_G3G5MorYlndH53",
    quantity: 1,
    price: 34000,
    name: "Canon EOS Rebel T6 Digital SLR Camera"
  },
  {
    sku: "sku_G3G3ezLA8VaR1P",
    quantity: 1,
    price: 120000,
    name: "Nikon D750 FX-format Digital SLR Camera"
  }
]

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
      items: items.map(item => ({
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
          {items.map(item => (
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
            <td>{formatPrice(totalPrice(items))}</td>
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
