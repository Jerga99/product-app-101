


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

    const productField1 = document.createElement("div");
    const productField2 = document.createElement("div");
    const productField3 = document.createElement("div");
    const productField4 = document.createElement("div");
    const productField5 = document.createElement("div");

    const productLabel1 = document.createElement("span");
    const productLabel2 = document.createElement("span");
    const productLabel3 = document.createElement("span");
    const productLabel4 = document.createElement("span");
    const productLabel5 = document.createElement("span");

    productElement.classList.add("product");

    productField1.classList.add("product-field");
    productField2.classList.add("product-field");
    productField3.classList.add("product-field");
    productField4.classList.add("product-field");
    productField5.classList.add("product-field");

    productLabel1.classList.add("product-label");
    productLabel2.classList.add("product-label");
    productLabel3.classList.add("product-label");
    productLabel4.classList.add("product-label");
    productLabel5.classList.add("product-label");

    productLabel1.innerHTML = "Name:";
    productLabel2.innerHTML = "Type:";
    productLabel3.innerHTML = "Price:";
    productLabel4.innerHTML = "Currency:";
    productLabel5.innerHTML = "Image:";

    const text1 = document.createTextNode("Laptop");
    const text2 = document.createTextNode("Electronics");
    const text3 = document.createTextNode("500");
    const text4 = document.createTextNode("usd");
    const text5 = document.createTextNode("some url of image");

    productField1.appendChild(productLabel1);
    productField1.appendChild(text1);

    productField2.appendChild(productLabel2);
    productField2.appendChild(text2);

    productField3.appendChild(productLabel3);
    productField3.appendChild(text3);
    productField4.appendChild(productLabel4);
    productField4.appendChild(text4);
    productField5.appendChild(productLabel5);
    productField5.appendChild(text5);

    productElement.appendChild(productField1);
    productElement.appendChild(productField2);
    productElement.appendChild(productField3);
    productElement.appendChild(productField4);
    productElement.appendChild(productField5);

    return productElement;
  }

  const row =  createProductRow();
  const productElement1 = createProductElement();
  const productElement2 = createProductElement();

  row.appendChild(productElement1);
  row.appendChild(productElement2);
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
