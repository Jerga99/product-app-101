


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

const numberList = [1, 3, 2, 50, 30, 100];
const names = ["Greg", "Kate", "Rob", "Marta"];

// not recommended
const mixedList = [1, "Lion", 40, true, 3.14, function(){}, {name: "Filip"}];

const products = [product1, product2, product3, product4, product5];

const index = 4;

const conditional1 = 100 > 150;
const conditional2 = 3 < 10;
const conditional3 = 3 === 2;

const conditional4 = 3 == "3";
const conditional5 = 11 >= 11;
const conditional6 = 15 <= 16;
const conditional7 = product1.price > product3.price;
const conditional8 = products.length < 10;
// tricky one: you can call "length" on string
const conditional9 = "Hello There".length < 8;
const conditional10 = products[1].name.length > 10;
// tricky one, you can think of true as 1 (something is turned on)
// false as 0 (something is turned off)
const conditional11 = true > false;

console.log(conditional1);
console.log(conditional2);
console.log(conditional3);
console.log(conditional4); // true
console.log(conditional5); // true
console.log(conditional6); // true
console.log(conditional7); // false
console.log(conditional8); // true
console.log(conditional9); // false
console.log(conditional10); // true
console.log(conditional11); // true
