

class Product {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log(`I am: ${this.name}`);
  }
}

module.exports = Product;