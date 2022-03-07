

runApp();

// async function runApp() {
//   const response = await getProductDataAsync()
//   const productData = await response.json();

//   const products = productData.map(item =>
//     new Product(item.name, item.type, item.price, item.currency, item.image)
//   );

//   const container = document.getElementById("productContainer");

//   products.customForEach(product => {
//     const productElement = createProductElement(product);
//     container.appendChild(productElement);
//   })

//   console.log("Log1");
//   console.log("Log2");
// }

function runApp() {
  getProductDataAsync().then((response) => {
    response.json().then((productData) => {
      const products = productData.map(item =>
        new Product(item.name, item.type, item.price, item.currency, item.image)
      );

      const container = document.getElementById("productContainer");

      products.customForEach(product => {
        const productElement = createProductElement(product);
        container.appendChild(productElement);
      })
    })
  }).catch((error) => {
    console.log(error.message);
  })

  console.log("Log1");
  console.log("Log2");
}
