import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";

function CategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) => product.category === category
        );

        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
  <div className="p-8">
    <h1>{category} Stickers</h1>

    <p>Total Products: {products.length}</p>

    {products.map((product) => (
      <div key={product.id}>
        <h2>{product.title}</h2>
        <p>{product.category}</p>
      </div>
    ))}
  </div>
);
}

export default CategoryPage;