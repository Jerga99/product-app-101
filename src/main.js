

runApp();

function ProductItem({product}) {
  return `
    <div class="product ${product.isOnStock ? "is-on-stock" : "is-not-on-stock"}">
      <div class="product-field">
        <span class="product-label">Name:</span>${product.name}
      </div>
      <div class="product-field">
        <span class="product-label">Type:</span>${product.type}
      </div>
      <div class="product-field">
        <span class="product-label">Price:</span>${product.price}
      </div>
      <div class="product-field">
        <span class="product-label">Currency:</span>${product.currency}
      </div>
      <div class="product-field">
        <span class="product-label">Image:</span>${product.image}
      </div>
      <div class="product-field">
        <span class="product-label">IsOnStock:</span>${product.isOnStock}
      </div>
    </div>
  `
}

async function runApp() {
  try {
    const products = await fetchProducts();
    const children = products.map(product => ProductItem({product}))

    ReactivityDOM.render(children);
  } catch(error) {
    console.error(error.message);
  }
}


