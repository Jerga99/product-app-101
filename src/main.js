

runApp();

function ProductItem() {
  return `
    <div class="product is-on-stock">
      <div class="product-field">
        <span class="product-label">Name:</span>Laptop
      </div>
      <div class="product-field">
        <span class="product-label">Type:</span>electronics
      </div>
      <div class="product-field">
        <span class="product-label">Price:</span>20
      </div>
      <div class="product-field">
        <span class="product-label">Currency:</span>usd
      </div>
      <div class="product-field">
        <span class="product-label">Image:</span>https://product-app-101-server.vercel.app/images/laptop.jpeg
      </div>
      <div class="product-field">
        <span class="product-label">IsOnStock:</span>true
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
      container.insertAdjacentHTML("beforeend", ProductItem());
    })
  } catch(error) {
    console.error(error.message);
  }
}


