import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      return;
    }

    try {
    const res = await axios.get(
  `http://localhost:3002/cart?userId=${user.id}`
);

console.log("User:", user);
console.log("Cart Data:", res.data);

setCartItems(res.data);
    } catch (error) {
      console.log(error);
      alert("Failed to load cart");
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3002/cart/${id}`
      );

      setCartItems(
        cartItems.filter(
          (item) => item.id !== id
        )
      );
    } catch (error) {
      console.log(error);
      alert("Failed to remove item");
    }
  };

  const handlePlace = () => {
    navigate("/checkout");
  };

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart 🛒
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold">
            Your Cart Is Empty
          </h2>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
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

                  <p className="text-gray-500">
                    Product ID: {item.productId}
                  </p>

                  <p className="text-gray-600 mt-2">
                    Price: ₹{item.price}
                  </p>

                  <p className="text-gray-600">
                    Quantity: {item.quantity || 1}
                  </p>

                  <p className="font-bold text-green-600">
                    Subtotal: ₹
                    {item.price *
                      (item.quantity || 1)}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeCartItem(item.id)
                  }
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-bold">
              Total: ₹{total}
            </h2>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handlePlace}
                className="bg-amber-300 text-white px-6 py-3 rounded-lg hover:bg-green-600"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;