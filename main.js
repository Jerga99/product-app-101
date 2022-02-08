


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


const products = [product1, product2, product3, product4, product5];

products.forEach(function(product) {
  console.log(product.name);
})

// for (let i = 0; i < products.length; i++) {
//   console.log(i);
//   console.log(products[i].name);
// }

// let i = 0;
// while (i < products.length) {
//   console.log(products[i].price);
//   i++;
// }

// let i = 6;
// do {
//   console.log(products[i].type);
//   i++;
// } while (i < products.length);

console.log("After the loop")






