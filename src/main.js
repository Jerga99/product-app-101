


runApp();

function runApp() {

  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 300, "usd", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "usd", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  const container = document.getElementById("productContainer");

  products.customForEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  })

  const numbers = [1,2,3,4];

  const numbers2 = numbers.customMap((item) => {
    return item * 10;
  })

  const productPrices = products.customMap((product) => {
    return product.name;
  })

  console.log(numbers2);
  console.log(productPrices);

}
