
runApp();

function runApp() {
  const outerValue = 1000;

  function sayHello() {
    const welcome = "Hello there";
    console.log(welcome);

    function innerHello() {
      const outerValue = 2000;
      const innerVariable = "Inner Hello";
      // Notice Closure when uncommented
      console.log(outerValue);
      console.log(welcome);
      console.log(outerValue);
      console.log(innerVariable);
    }

    // console.log(innerVariable);
    innerHello();
  }

  // innerHello()

  class Product {
    constructor(
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
    }

    displayInfo() {
      console.log("Name: " + this.name);
      console.log("Type: " + this.type);
      console.log("Price: " + this.price);
      console.log("Currency: " + this.currency);
      console.log("Image: " + this.image);
    }
  }

  class FancyProduct extends Product {
    fancyFunction() {
      console.log("I am a fancy product!!!!");
    }
  }

  sayHello();

  {
    let person = "Filip Jerga";
    console.log(person);
  }

  // not available
  // console.log(person);

  debugger
  if (true) {
    let againScope = "if scope";
    console.log(againScope);
  }

  // not available
  // console.log(againScope);

  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
  const product3 = new Product();
  const product4 = new Product("Fancy Hat", "clothing", 100);
  const product5 = new Product("Skateboard");
  const products = [product1, product2, product3, product4, product5];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
