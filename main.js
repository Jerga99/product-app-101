


runApp();

function runApp() {

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
      const info = `
      Name: ${this.name}
      Type: ${this.type}
      Price: ${this.price}
      Currency: ${this.currency}
      Image: ${this.image}`;

      console.log(info);
    }
  }

  class FancyProduct extends Product {

    constructor(name, type, price, currency, image, hasInsurance) {
      super(name, type, price, currency, image);
      this.hasInsurance = hasInsurance;
    }

    fancyFunction() {
      console.log("I am a fancy product!!!!");
    }
  }

  const product1 = new Product("Laptop", "eletronics", 500, "usd", "some_url_of_image");
  const product2 = new Product("Super shoes", "clothing", 50, "usd", "some_url_of_image");
  const product3 = new Product();
  const product4 = new Product("Fancy Hat", "clothing", 100);
  const product5 = new Product("Skateboard");

  const product6 = new FancyProduct(
    "Fancy Phone",
    "phones",
    1000,
    "usd",
    "some_url_of_image",
    true
  );

  const products = [product1, product2, product3, product4, product5, product6];

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    product.displayInfo();
    console.log("-----------------");
  }
}
