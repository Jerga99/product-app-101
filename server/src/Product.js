

class Product {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log(`I am: ${this.name}`);
  }
}

function callMe() {
  console.log("I have been called!");
}

exports.callMe = callMe;
exports.Product = Product;