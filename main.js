


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

  const _createElement = (elementType, classList) => {
    const element = document.createElement(elementType);
    element.classList.add(classList);
    return element;
  }

  const createProductElement = (product) => {
    const productElement = _createElement("div", "product");

    const productLabels = ["Name", "Type", "Price", "Currency", "Image"];
    productLabels.forEach(label => {
      const productField = _createElement("div", "product-field");
      const productLabel = _createElement("span", "product-label");

      productLabel.innerHTML = `${label}:`;
      const text = document.createTextNode(product[label.toLowerCase()]);

      productField.appendChild(productLabel);
      productField.appendChild(text);
      productElement.appendChild(productField);
    })

    return productElement;
  }

  const container = document.getElementById("productContainer");

  products.forEach(product => {
    const productElement = createProductElement(product);
    container.appendChild(productElement);
  })

}
