import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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

  const handleCart = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
      const cartItem = {
        userId: user.id,
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      };

      await axios.post(
        "http://localhost:3002/cart",
        cartItem
      );

      setCartAdded(true);

      setTimeout(() => {
        setCartAdded(false);
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("Cart adding failed");
    }
  };

  const handleWishlist = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    try {
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
      }, 2000);
    } catch (error) {
      console.log(error);
      alert("Wishlist adding failed");
    }
  };

  return (
    <div className="bg-blend-lighten rounded-xl shadow-lg p-4 hover:shadow-2xl transition duration-300">
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
        <img
          src={image}
          alt={product.title}
          className="w-full h-56 object-cover rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold mt-4 pixel-font">
        {product.title}
      </h3>

      <p className="text-gray-500 pixel-font">
        {product.category}
      </p>

      <p className="text-2xl font-bold text-green-600 mt-2">
        ₹{product.price}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={handleWishlist}
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg"
        >
          ❤️
        </button>

        <button
          onClick={handleCart}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
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
        className="block mt-4 bg-black text-white text-center py-2 rounded-lg hover:bg-gray-800"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;