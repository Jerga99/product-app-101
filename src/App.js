
import React from "react";

export default function App() {
  // const nums = [1,2,3];
  const products = [
    {name: "Skateboard", price: 23, id: "1sad7s89"},
    {name: "PC", price: 222, id: "asd87d9"},
    {name: "Phone", price: 111, id: "sdad7as9"},
  ]
  // JSX!
  return (
    <div>
      Something!
      {products.map(product =>
        <div key={product.id}>
          <p>
            {product.name}: <span>{product.price}$</span>
          </p>
        </div>
      )}
    </div>
  )
}