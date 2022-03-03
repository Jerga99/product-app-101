

runApp();

function runApp() {
  getProductDataAsync(function(productData) {
    const products = productData.map(item =>
      new Product(item.name, item.type, item.price, item.currency, item.image)
    );

    const container = document.getElementById("productContainer");

    products.customForEach(product => {
      const productElement = createProductElement(product);
      container.appendChild(productElement);
    })
  });

  console.log("Log1");
  console.log("Log2");
}
