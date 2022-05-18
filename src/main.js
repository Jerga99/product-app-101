
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
  const helloWorld = "My custom text"
  return (
    <div>
      My first react component {title} {helloWorld}
    </div>
  )
}

function Whatever() {
  return (
    <div>
      <MyReactComponent title="Some Text!" />
      <p>Hi paragraph!</p>
    </div>
  )
}

function App() {
  const test = "Just Testing";
  return (
    <div>
      <MyReactComponent title={test} />
      <div>Hello World</div>
      <div>
        <div>
          Hi there!
        </div>
        <Whatever />
      </div>
    </div>
  )
}

root.render(<App />);

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

