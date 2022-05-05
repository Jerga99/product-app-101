
import { fetchProducts } from "./fetch-products";
import { ProductItem } from "./components/ProductItem";
import { ProductPage } from "./components/ProductPage";
import { ReactivityDOM } from "./reactivity";

(function() {
  runApp();

  async function runApp() {
    try {
      const products = await fetchProducts();
      const children = products.map(product => ProductItem({product}))
      ReactivityDOM.render(ProductPage({children}));
    } catch(error) {
      console.error(error.message);
    }
  }
})()

