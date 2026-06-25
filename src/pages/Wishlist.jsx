import { useState, useEffect } from "react";
import axios from "axios";

function Wishlist() {
  const [wishlistItems, setWishlistItems] =
    useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      return;
    }

    try {
      const res = await axios.get(
        `http://localhost:3002/wishlist?userId=${user.id}`
      );

      setWishlistItems(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = async (item) => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please Login First");
      return;
    }

    try {
      await axios.post(
        "http://localhost:3002/cart",
        {
          userId: user.id,
          productId: item.productId,
          title: item.title,
          price: item.price,
          image: item.image,
          quantity: 1,
        }
      );

      alert("Added To Cart 🛒");
    } catch (error) {
      console.log(error);
      alert("Failed To Add Cart");
    }
  };

  const removeWishlistItem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3002/wishlist/${id}`
      );

      setWishlistItems(
        wishlistItems.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.log(error);
      alert("Failed To Remove Item");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Wishlist ❤️
      </h1>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold">
            No Wishlist Items Here
          </h2>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border rounded-lg p-4 shadow-md"
            >
              <img
                src={
                  Array.isArray(item.image)
                    ? item.image[0]
                    : item.image
                }
                alt={item.title}
                className="w-32 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>

                <p className="text-gray-600 mt-2">
                  ₹{item.price}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() =>
                    addToCart(item)
                  }
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add To Cart 🛒
                </button>

                <button
                  onClick={() =>
                    removeWishlistItem(item.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;