

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
    const response = await fetch("https://product-app-101-server.vercel.app/api/products");
    const productData = await response.json();
    const products = productData.map(item =>
      new Product(item.name, item.type, item.price, item.currency, item.image, item.isOnStock)
    );

    const container = document.getElementById("productContainer");

    products.customForEach(product => {
      const props = { product, testValue: "Hi There" };
      debugger
      container.insertAdjacentHTML("beforeend", ProductItem(props));
    })
  } catch(error) {
    console.error(error.message);
  }
}


