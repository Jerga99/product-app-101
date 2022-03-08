class Product {
  constructor(
    name = "Default Name",
    type,
    price,
    currency = "usd",
    image = "unsplash_url",
    isOnStock
  ) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.currency = currency;
    this.image = image;
    this.isOnStock = isOnStock;
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
