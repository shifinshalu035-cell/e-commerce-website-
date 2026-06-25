import { useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  useEffect(() => {
    fetchCart();
  }, []);

 const fetchCart = async () => {
  if (!user) return;

  try {
    const res = await axios.get(
      `http://localhost:3002/cart?userId=${user.id}`
    );

    console.log("User ID:", user.id);
    console.log("Cart Data:", res.data);

    setCartItems(res.data);
  } catch (error) {
    console.log(error);
  }
};

  const total = cartItems.reduce(
    (sum, item) =>
      sum + item.price * (item.quantity || 1),
    0
  );

  const handleOrder = async () => {
    if (!name || !address || !phone) {
      alert("Please fill all fields");
      return;
    }

    try {
      const orderData = {
        userId: user.id,
        customerName: name,
        address: address,
        phone: phone,
        items: cartItems,
        total: total,
        status: "Processing",
      };

      await axios.post(
        "http://localhost:3002/orders",
        orderData
      );

      // Clear cart after order
      for (const item of cartItems) {
        await axios.delete(
          `http://localhost:3002/cart/${item.id}`
        );
      }

      alert("Order Placed Successfully ✅");

      navigate("/order-success");
    } catch (error) {
      console.log(error);
      alert("Failed to place order");
    }
  };

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">
          Your Cart Is Empty 🛒
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        <p className="mb-6 text-green-600 font-semibold">
          Welcome, {user.name}
        </p>

        <h2 className="text-2xl font-semibold mb-6">
          Order Summary
        </h2>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 mb-4 rounded-lg"
          >
            <img
              src={
                Array.isArray(item.image)
                  ? item.image[0]
                  : item.image
              }
              alt={item.title}
              className="w-24 h-24 object-cover rounded"
            />

            <div>
              <h3 className="font-semibold">
                {item.title}
              </h3>

              <p className="text-gray-600">
                Quantity: {item.quantity || 1}
              </p>

              <p className="text-green-600 font-bold">
                ₹{item.price * (item.quantity || 1)}
              </p>
            </div>
          </div>
        ))}

        <h2 className="text-xl font-bold mb-8">
          Total: ₹{total}
        </h2>

        <h2 className="text-2xl font-semibold mb-4">
          Shipping Details
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          className="border p-3 w-full mb-4 rounded-lg"
        />

        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          className="border p-3 w-full mb-4 rounded-lg"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
          className="border p-3 w-full mb-6 rounded-lg"
        />

        <h2 className="text-2xl font-semibold mb-4">
          Payment Method
        </h2>

        <div className="mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              defaultChecked
            />
            Cash on Delivery
          </label>
        </div>

        <button
          onClick={handleOrder}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Place Order 
        </button>

      </div>
    </div>
  );
}

export default Checkout;