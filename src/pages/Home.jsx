import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../component/HeroSection";
import CategorySection from "../component/CategorySection";
import ProductCard from "../component/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products)

  return (
    <div>
      <HeroSection />


      <CategorySection />
      <h1 className="text-3xl font-bold text-center my-8">
        Our Featured Products
      </h1>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 p-4">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition"
    >
      <img
        src={
          Array.isArray(product.image)
            ? product.image[0]
            : product.image
        }
        alt={product.title}
        className="w-full h-24 object-cover"
      />

      <div className="p-2">
        <h2 className="font-bold text-xs">
          {product.title}
        </h2>

        <p className="text-green-600 font-bold text-sm mt-1">
          ₹{product.price}
        </p>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default Home;