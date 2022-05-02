

function ProductPage({children}) {

  return `
    <div class="page">
      <div class="container">
        <div class="product-grid">
          ${children.join(" ")}
        </div>
      </div>
    </div>
  `
}