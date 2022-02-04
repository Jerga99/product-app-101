
// it' a structure that can hold multiple values grouped together
// key - value pairs
debugger
const product1 = {
  name: "Laptop",
  type: "eletronics",
  price: 200,
  currency: "usd",
  image: "some_url_of_image"
}

const product2 = {
  name: "Super shoes",
  type: "clothing",
  price: 50,
  currency: "usd",
  image: "some_url_of_image"
}

function displayProductInfo(product) {
  console.log("Name: ", product.name);
  console.log("Type: " + product.type);
  console.log("Price: " + product.price);
  console.log("Curency: " + product.currency);
  console.log("Image: " + product.image);
  console.log("------------------------")
}

displayProductInfo(product1);
displayProductInfo(product2);
