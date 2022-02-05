


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



if (100 > 150) {
  console.log("150 is larger than 100");
}

if (conditional3) {
  console.log("3 === 2");
} else {
  console.log("3 is not equal to 2");
}

const justSomeVariable = false;

if (product1.price < product2.price) {
  console.log("product1 price is > than product2 price")
} else if (product2.price > product3.price) {
  console.log("product2 price is > than product3 price")
} else if (justSomeVariable) {
  console.log("just some variable");
} else {
  console.log("Nothing true so we are in else!");
}

if (false) {
  console.log("");
} else if (false) {
  console.log("");
} else if (false) {
  console.log("")
} else {
  console.log("");
}
