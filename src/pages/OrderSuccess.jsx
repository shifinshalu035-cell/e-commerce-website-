import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center max-w-md w-full">

        <div className="text-6xl mb-4">
          🎉
        </div>

        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for shopping with Stickora.
          Your order has been received and is being processed.
        </p>

        <div className="flex flex-col gap-4">

          <Link
            to="/"
            className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/orders"
            className="border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            View Orders
          </Link>

        </div>

      </div>
    </div>
  );
}

export default OrderSuccess;