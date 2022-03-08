

runApp();

async function runApp() {
  try {
    const response = await fetch("https://product-app-101-server.vercel.app/api/products");
    const productData = await response.json();
    console.log(productData);
    const products = productData.map(item =>
      new Product(item.name, item.type, item.price, item.currency, item.image, item.isOnStock)
    );

    const container = document.getElementById("productContainer");

    // if product is on stock (isOnStock == true)
    // then provide a green border to the product element
    // otherwise provide a red border
    products.customForEach(product => {
      const productElement = createProductElement(product);

      if (product.isOnStock) {
        productElement.classList.add("is-on-stock");
      } else {
        productElement.classList.add("is-not-on-stock");
      }

      container.appendChild(productElement);
    })
  } catch(error) {
    console.error(error.message);
  }
}


