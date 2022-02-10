



function Product(
  name = "Default Name",
  type,
  price,
  currency = "usd",
  image = "unsplash_url"
) {

  this.name = name;
  this.type = type;
  this.price = price;
  this.currency = currency;
  this.image = image;
  this.displayInfo = function() {
    console.log("Name: " + this.name);
    console.log("Type: " + this.type);
    console.log("Price: " + this.price);
    console.log("Currency: " + this.currency);
    console.log("Image: " + this.image);
  }
}

Product.prototype.displayInfo2 = function() {
  console.log(this.name + " " + this.type);
}


const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
const product3 = new Product();
const product4 = new Product("Fancy Hat", "clothing", 100);
const product5 = new Product("Skateboard");

const products = [product1, product2, product3, product4, product5];

products[0].name = "Phone";

const product100 = product1;

product100.image = "No Image";

console.log(products[0].image);
console.log(product1.image);
console.log(product100.image);

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   product.displayInfo();
//   product.displayInfo2();
//   console.log("--------------------");
// }








