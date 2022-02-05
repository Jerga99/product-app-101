


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



// if ((product1.price > product2.price) && (product3.price > product4.price)) {
//   console.log("yey");
// } else {
//   console.log("no");
// }

if (
  (numberList[0] > numberList[1]) ||
  (numberList[numberList.length - 1] > numberList[numberList.length - 2])
) {
  console.log("yey");
} else {
  console.log("non");
}

