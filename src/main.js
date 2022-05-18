
import { fetchProducts } from "./fetch-products";
import sayHello, { ProductItem } from "./components/ProductItem";
import { ProductPage } from "./components/ProductPage";
import { ReactivityDOM } from "./reactivity";

import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
  document.getElementById("reactApp")
);

function MyReactComponent({title}) {

  return React.createElement(
    "div", 
    null, 
    `My first react component: ${title}`
  );
}

const element = React.createElement(
  MyReactComponent, 
  {title: "Custom Text"}, 
  null,
);

root.render(element);

(function() {
  runApp();

  async function runApp() {
    try {
      sayHello();
      const products = await fetchProducts();
      const children = products.map(product => ProductItem({product}))
      ReactivityDOM.render(ProductPage({children}));
    } catch(error) {
      console.error(error.message);
    }
  }
})()

