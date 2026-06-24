import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const total = cartItems.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold">
            Your Cart Is Empty 🛒
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
                  src={item.image[0]}
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

                <button
                  onClick={() =>
                    dispatch(removeFromCart(item.id))
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
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;