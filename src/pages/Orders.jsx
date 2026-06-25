import { useSelector } from "react-redux";

function Orders() {
  const orders = useSelector(
    (state) => state.orders?.orders || []
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Orders
        </h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-lg p-10 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              No Orders Yet 📦
            </h2>

            <p className="text-gray-500">
              Start shopping and your orders will appear here.
            </p>
          </div>
        ) : (
          orders.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-lg p-6 mb-6"
            >
              <h2 className="text-xl font-bold mb-4">
                Order #{order.id}
              </h2>

              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 border-b py-4"
                >
                  <img
                    src={
                      Array.isArray(item.image)
                        ? item.image[0]
                        : item.image
                    }
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">
                      {item.title}
                    </h3>

                    <p className="text-gray-500">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}

              <div className="mt-4 flex justify-between items-center">
                <h3 className="text-lg font-bold">
                  Total: ₹{order.total}
                </h3>

                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">
                  Processing
                </span>
              </div>
            </div>
          ))
        )}

      </div>
    </div>
  );
}

export default Orders;