import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";

function Wishlist() {
  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  return (
    <div>
      <h1>Wishlist Page</h1>

      {wishlistItems.length === 0 ? (
        <h2>No Wishlist Items Here</h2>
      ) : (
        wishlistItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{item.title}</h3>

            <p>Category: {item.category}</p>

            <p>₹{item.price}</p>

            <button
              onClick={() =>
                dispatch(
                  removeFromWishlist(item.id)
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;