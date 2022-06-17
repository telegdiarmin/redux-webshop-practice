import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const API_URL =
  "https://random-data-api.com/api/commerce/random_commerce?size=5";

const Products = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        data.forEach(item => item.quantity = 1);
        getProducts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const productsList = products.map((product) => (
    <ProductItem
      key={product.id}
      item={product}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productsList}</ul>
    </section>
  );
};

export default Products;
