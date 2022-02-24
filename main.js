


runApp();

function runApp() {

  const productElement1 = document.getElementById("product1");
  const productElement2 = document.getElementById("product2");
  const productElement3 = document.getElementById("product3");
  const productElement4 = document.getElementById("product4");

  // function createClickHandler(message, name) {
  //   return function() {
  //     console.log(message + " " + name);
  //   }
  // }

  // const createClickHandler = (message, name) => {
  //   return () => {
  //     console.log(message + " " + name);
  //   }
  // }

  const createClickHandler = (message, name) => () => console.log(message + " " + name);

  const clickHandler = () => console.log("Hello World");
  const clickHandler2 = createClickHandler("Hi There!", "Kate");

  productElement1.addEventListener("click", clickHandler);
  productElement2.addEventListener("click", clickHandler2);
  productElement3.addEventListener("click", createClickHandler("I have no idea", "John"));
  productElement4.addEventListener("click", () => console.log("I am annonymous function!"));

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

    displayInfo(additionalInfo = "") {
      const info = `
      Name: ${this.name}
      Type: ${this.type}
      Price: ${this.price}
      Currency: ${this.currency}
      Image: ${this.image}
      ${additionalInfo}`;

      console.log(info);
    }
  }

  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
  const product3 = new Product("Smartphone", "phones", 300, "usd", "some_url_of_image");
  const product4 = new Product("Fancy Hat", "clothing", 100, "usd", "some_url_of_image");

  const products = [product1, product2, product3, product4];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
