import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ProductCard({ product }) {
  
  const navigate = useNavigate();

  const [image, setImage] = useState(
    Array.isArray(product.image)
      ? product.image[0]
      : product.image
  );

  const [cartAdded, setCartAdded] = useState(false);
  const [wishlistAdded, setWishlistAdded] =
    useState(false);

  
  const handleCart = async (e) => {
       e.stopPropagation ();
       e.preventDefault ();
  
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }
    console.log("User ID:", user.id);
console.log("Product ID:", product.id);

    try {
      const cartItem = {
        userId: user.id,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      
      const existing = await axios.get(
        `http://localhost:3002/cart?userId=${user.id}&productId=${product.id}`
      );

      if (existing.data.length > 0) {
        alert("Already in Cart 🛒");
        return;
      }

      await axios.post(
        "http://localhost:3002/cart",
        cartItem
      );

      setCartAdded(true);

      setTimeout(() => {
        setCartAdded(false);
      }, 1000);

    } catch (error) {
      console.log(error);
      alert("Failed to Add Cart");
    }
  };

  
  const handleWishlist = async (e) => {
     e.preventDefault ();
     e.preventDefault();
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please Login First");
      navigate("/login");
      return;
    }

    try {

      
      const existing = await axios.get(
        `http://localhost:3002/wishlist?userId=${user.id}&productId=${product.id}`
      );
      console.log(existing.data);

      if (existing.data.length > 0) {
        alert("Already in Wishlist ❤️");
        return;
      }

      const wishlistItem = {
        userId: user.id,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
      };

      await axios.post(
        "http://localhost:3002/wishlist",
        wishlistItem
      );

      setWishlistAdded(true);

      setTimeout(() => {
        setWishlistAdded(false);
      }, 1000);

    } catch (error) {
      console.log(error);
      alert("Failed to Add Wishlist");
    }
  };

  return (
    <motion.div 
    initial={{
  opacity: 0,
  y: 200,
  scale:0.5
}}
animate={{
  opacity:1,
  y:0,
  scale:1
}}
transition={{
  duration:1
}}
      className="bg-blend-lighten rounded-xl shadow-lg p-10 hover:shadow-2xl transition duration-300">

      <div
        onMouseEnter={() => {
          if (
            Array.isArray(product.image) &&
            product.image[1]
          ) {
            setImage(product.image[1]);
          }
        }}
        onMouseLeave={() => {
          setImage(
            Array.isArray(product.image)
              ? product.image[0]
              : product.image
          );
        }}
      >
        <Link to={`/product/${product.id}`}>
          <img
            src={image}
            alt={product.title}
            className="w-full h-50 object-cover rounded-lg"
          />
        </Link>
      </div>

      <h3 className="text-sm font-bold mt-4 pixel-font">
        {product.title}
      </h3>

      <p className="text-gray-500  text-xs pixel-font">
        {product.category}
      </p>

      <p className="text-10px font-bold text-green-300 mt-2">
        ₹{product.price}
      </p>

      <div className="flex gap-3 mt-4">

        <button
          type="button"
          onClick={handleWishlist}
          className="  text-white px-4 py-2 rounded-lg"
        >
          ❤️
        </button>

        <button
        type="button"
          onClick={handleCart}
          className="  text-white px-4 py-2 rounded-lg"
        >
          🛒
        </button>

      </div>

      {wishlistAdded && (
        <p className="text-pink-500 mt-3 text-sm">
          Added to Wishlist ❤️
        </p>
      )}

      {cartAdded && (
        <p className="text-green-500 mt-2 text-sm">
          Added to Cart 🛒
        </p>
      )}

      <Link
        to={`/product/${product.id}`}
        className="block mt-4  text-black text-center py-2 rounded-lg "
      >
        View Details
      </Link>

    </motion.div>
  );
}

export default ProductCard;