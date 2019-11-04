import React from "react"
import products from "../../data/products"

export default function Store() {
  return (
    <div>
      {products.map(product => (
        <div>
          <div>
            <img
              src={`/images/${product.sku}.jpg`}
              alt={product.name}
              width={50}
            />
          </div>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  )
}
