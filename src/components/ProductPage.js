

export function ProductPage({children}) {

  return `
    <div class="page">
      <div class="container">
        <h1>My Items</h1>
        <div class="product-grid">
          ${children.join(" ")}
        </div>
      </div>
    </div>
  `
}