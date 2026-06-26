import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../component/HeroSection";
import CategorySection from "../component/CategorySection";
import ProductCard from "../component/ProductCard";

function Home() {
  console.log("Home render")
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/products")
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

      <h1 className="text-3xl  text-yellow-400 font-bold text-center my-8 pixel-font " id="future">
        Our Featured Products
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4" >
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