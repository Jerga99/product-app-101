

runApp();

function runApp() {

  const products = PRODUCT_DATA.map(item =>
    new Product(item.name, item.type, item.price, item.currency, item.image)
  );

  const container = document.getElementById("productContainer");

  products.customForEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  })
}
