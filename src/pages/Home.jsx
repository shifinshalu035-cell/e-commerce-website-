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

  return (
    <div>
      <HeroSection />


      <CategorySection />
      <h1 className="text-3xl font-bold text-center my-8">
        Our Featured Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
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

export default Home;