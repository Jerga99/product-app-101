
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("app")
);

root.render(<App />);

// (function() {
//   runApp();

//   async function runApp() {
//     try {
//       sayHello();
//       const products = await fetchProducts();
//       const children = products.map(product => ProductItem({product}))
//       ReactivityDOM.render(ProductPage({children}));
//     } catch(error) {
//       console.error(error.message);
//     }
//   }
// })()

