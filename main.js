



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
    image,
    displayInfo: function() {
      console.log(this);
      console.log("Calling display info!");
    }
  }
}

const product1 = createProduct("Laptop", "eletronics", 500, "usd", "some_url_of_image");
const product2 = createProduct("Super shoes", "clothing", 50, "usd", "some_url_of_image");
const product3 = createProduct();
const product4 = createProduct("Fancy Hat", "clothing", 100);
const product5 = createProduct("Skateboard");

const products = [product1, product2, product3, product4, product5];

for (let i = 0; i < products.length; i++) {
  debugger
  const product = products[i];
  product.displayInfo();
}








