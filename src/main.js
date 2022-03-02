

const data = [{
  name: "Laptop",
  type: "Electronics",
  price: 500,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Super shoes",
  type: "Clothing",
  price: 50,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Smartphone",
  type: "Phones",
  price: 300,
  currency: "usd",
  image: "some_url_of_image"
}, {
  name: "Fancy Hat",
  type: "Clothing",
  price: 100,
  currency: "usd",
  image: "some_url_of_image"
}]


runApp();

function runApp() {

  const products = data.map(item =>
    new Product(item.name, item.type, item.price, item.currency, item.image)
  );

  const container = document.getElementById("productContainer");

  products.customForEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  })
}
