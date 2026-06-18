// // import { useSelector } from "react-redux";

// // function Cart() {
// //   const cartItems = useSelector(
// //     (state) => state.cart.cartItems
// //   );

// //   return (
// //     <div>
// //       <h1>Cart Page</h1>

// //       {cartItems.map((item) => (
// //         <div key={item.id}>
// //           <h3>{item.title}</h3>
// //           <p>₹{item.price}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Cart;
// import { useSelector } from "react-redux";

// function Cart() {
//   const cart = useSelector((state) => state.cart);

//   return (
//     <div>
//       <h1>Cart Page</h1>

//       <pre>
//         {JSON.stringify(cart, null, 2)}
//       </pre>
//     </div>
//   );
// }

// export default Cart;
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
    <div>
      <h1>Cart Page</h1>

      {cartItems.length === 0 ? (
        <h3>Your Cart Is Empty</h3>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
      <button onClick={()=> dispatch(removeFromCart(item.id))}>
        remove 
        
      </button>
      <h2>Total:₹{total}</h2>
    </div>
  );
}

export default Cart;