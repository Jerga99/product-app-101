


function displayProductInfo(product) {
  console.log("Name: ", product.name);
  console.log("Type: " + product.type);
  console.log("Price: " + product.price);
  console.log("Curency: " + product.currency);
  console.log("Image: " + product.image);
  console.log("------------------------")
}

function createProduct(
  name = "Default Name",
  type,
  price,
  currency = "usd",
  image = "unsplash_url"
) {
  return {
    name, // name: name
    type,
    price,
    currency,
    image
  }
}

const product1 = createProduct("Laptop", "eletronics", 500, "usd", "some_url_of_image");
const product2 = createProduct("Super shoes", "clothing", 50, "usd", "some_url_of_image");
const product3 = createProduct();
const product4 = createProduct("Fancy Hat", "clothing", 100);
const product5 = createProduct("Skateboard");


displayProductInfo(product1);
displayProductInfo(product2);
displayProductInfo(product3);
displayProductInfo(product4);
displayProductInfo(product5);
