import { useState, useEffect } from "react";
import axios from "axios";
import HeroSection from "../component/HeroSection";
import CategorySection from "../component/CategorySection";
import ProductCard from "../component/ProductCard";
import { motion } from "framer-motion";
import WelcomeSection from "./Welcome";


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


<WelcomeSection/>
<CategorySection />

             <div className="flex justify-center"> 
<motion.h1
  initial={{ backgroundPosition: "-200% 0" }}
  animate={{ backgroundPosition: "200% 0" }}
  transition={{
    duration: 4,
    repeat: Infinity,
    repeatDelay: 10,
    ease: "linear",
  }}
  className="text-2xl  font-bold pixel-font"
  style={{
    backgroundImage:
      "linear-gradient(120deg,#b91c1c 35%,#ffffff 23%,#b91c1c 30%)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}
>
    Our Featured Products
</motion.h1>
</div>

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