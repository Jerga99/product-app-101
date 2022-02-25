


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

  const container = document.getElementById("productContainer");

  const createProductRow = () => {
    const row = document.createElement("div");
    row.classList.add("product-row");
    return row;
  }

  const createProductElement = (product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");

    const productLabels = ["Name", "Type", "Price", "Currency", "Image"];
    productLabels.forEach(label => {
      const productField = document.createElement("div");
      const productLabel = document.createElement("span");

      productField.classList.add("product-field");
      productLabel.classList.add("product-label");

      productLabel.innerHTML = `${label}:`;
      const text = document.createTextNode(product[label.toLowerCase()]);

      productField.appendChild(productLabel);
      productField.appendChild(text);
      productElement.appendChild(productField);
    })

    return productElement;
  }

  let row;

  products.forEach((product, i) => {
    const productElement = createProductElement(product);
    if (i % 2 === 0) {
      row = createProductRow();
      container.appendChild(row);
    }

    row.appendChild(productElement);
  })

}
