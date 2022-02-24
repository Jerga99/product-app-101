


runApp();

function runApp() {

  const productElements = document.getElementsByClassName("product");
  const container = document.getElementById("productContainer");

  const createProductRow = () => {
    const row = document.createElement("div");
    row.classList.add("product-row");
    return row;
  }

  const createProductElement = () => {
    const productElement = document.createElement("div");
    const productField = document.createElement("div");
    const productLabel = document.createElement("span");

    productElement.classList.add("product");
    productField.classList.add("product-field");
    productLabel.classList.add("product-label");

    productLabel.innerHTML = "Name:";

    const text = document.createTextNode("Laptop");

    productField.appendChild(productLabel);
    productField.appendChild(text);

    productElement.appendChild(productField);

    return productElement;
  }

  const row =  createProductRow();
  const productElement = createProductElement();

  row.appendChild(productElement);
  container.appendChild(row);


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
