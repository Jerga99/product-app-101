
// Node js is using CommonJS module system
// Browser and Node JS are implementing EcmaScript standarts, ES

const {Product, callMe} = require("./src/Product");

const product = new Product("TV");

product.log();
callMe();