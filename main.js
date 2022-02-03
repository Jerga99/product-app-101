
// it' a structure that can hold multiple values grouped together
// key - value pairs
const product = {
  name: "Laptop",
  type: "eletronics",
  price: 200,
  currency: "usd",
  image: "some_url_of_image"
}

console.log(product.name);

console.log(product["type"]);

const currencyKey = "currency";

console.log(product[currencyKey]);

console.log(product.price * 100);

console.log(product.price + " " + product.currency)
