
import React, {useEffect, useState} from "react";
import { fetchProducts } from "./fetch-products";

function CustomComponent({children}) {
  return (
    <div>
      Hello World
      {children}
    </div>
  )
}

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const products = await fetchProducts();
      setProducts(products);
    }

    getData();
  }, []);

  // JSX!
  return (
    <div>
      <CustomComponent> 
        <div>
          <div>Hi There</div>
          <div>User</div>
        </div>
      </CustomComponent>
      {products.map(product =>
        <div key={product.image}>
          <p>
            {product.name}: <span>{product.price}$</span>
          </p>
        </div>
      )}
    </div>
  )
}