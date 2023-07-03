import React, { useEffect, useState } from "react";
import fetchAPI from "@/pages/api/FetchAPI";
import ProductCard from "./ProductCard";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchAPI("Computador").then((res) => {
      setProducts(res);
    });
  }, [products]);

//   console.log(products);

  return (
    <section className="items-c">
      <ProductCard></ProductCard>
    </section>
  );
}

export default Products;



// {" "}
// <h1>Lista de produtos Aqui </h1>


// {products.map((product) => (
//   <div key={product.title}> {product.title}</div>
// ))}
