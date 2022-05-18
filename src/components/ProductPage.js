
import React from "react";

export function ProductPage({children}) {

  return (
    <div className="page">
      <div className="container">
        <h1>New Products</h1>
        <div className="product-grid">
          {children}
        </div>
      </div>
    </div>
  )
}