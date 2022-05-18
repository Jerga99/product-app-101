
import React from "react";

export function ProductItem({product}) {
 
  return (
    <div className={`product ${product.isOnStock ? "is-on-stock" : "is-not-on-stock"}`}>
      <div className="product-field">
        <span className="product-label">Name:</span>{product.name}
      </div>
      <div className="product-field">
        <span className="product-label">Type:</span>{product.type}
      </div>
      <div className="product-field">
        <span className="product-label">Price:</span>{product.price}
      </div>
      <div className="product-field">
        <span className="product-label">Currency:</span>{product.currency}
      </div>
      <div className="product-field">
        <span className="product-label">Image:</span>{product.image}
      </div>
      <div className="product-field">
        <span className="product-label">IsOnStock:</span>{`${product.isOnStock}`}
      </div>
    </div>
  )
}