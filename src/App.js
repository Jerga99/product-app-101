
import React, {useEffect, useState} from "react";
import { ProductPage } from "./components/ProductPage";
import { ProductItem } from "./components/ProductItem";
import { fetchProducts } from "./fetch-products";

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
    <ProductPage>
      {products.map(product =>
        <ProductItem 
          key={product.image} 
          product={product} 
        />
      )}
    </ProductPage>
  )
}