import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../component/ProductCard";

function CategoryPage() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
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
  <div className="p-8 bg-black min-h-screen">
    <h1 className="text-4xl font-bold text-white mb-4 capitalize">
      {category} Stickers
    </h1>

    <p className="text-gray-400 mb-8">
      Total Products: {products.length}
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  </div>
);
}

export default CategoryPage;