import { useParams,useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";

function ProductDetails() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleBuyNow =()=>{
    dispatch(addToCart(product));
    navigate("/checkout");
  }

  const [product, setProduct] = useState(null);

  const [wishlistAdded, setWishlistAdded] =
    useState(false);

  const [cartAdded, setCartAdded] =
    useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3002/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleWishlist = () => {
    dispatch(addToWishlist(product));
    setWishlistAdded(true);
  };

  const handleCart = () => {
    dispatch(addToCart(product));
    setCartAdded(true);
  };

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        
        <div>
          <img
            src={
              Array.isArray(product.image)
                ? product.image[0]
                : product.image
            }
            alt={product.title}
            className="w-full h-[600px] object-cover rounded-xl"
          />
        </div>

        
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-3xl text-green-500 font-bold mb-4">
            ₹{product.price}
          </p>

          <p className="text-gray-300 mb-6">
            {product.description}
          </p>

          <p className="mb-2">
            Category: {product.category}
          </p>

          <p className="mb-2">
            Rating: ⭐ {product.rating}
          </p>

          <p className="mb-6">
            Stock: {product.stock}
          </p>

          <div className="flex gap-4">

          
            <button
              onClick={handleWishlist}
              disabled={wishlistAdded}
              className={`px-6 py-3 rounded-lg transition ${
                wishlistAdded
                  ? "bg-pink-700"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {wishlistAdded
                ? "❤️ Added To Wishlist"
                : "❤️ Wishlist"}
            </button>

            
            <button
              onClick={handleCart}
              disabled={cartAdded}
              className={`px-6 py-3 rounded-lg transition ${
                cartAdded
                  ? "bg-green-700"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              {cartAdded
                ? "✅ Added To Cart"
                : "🛒 Add To Cart"}
            </button>
            <button onClick={handleBuyNow} className="px-6 py-6 rounded-lg bg-blue-600 transition ">
              ⚡Buy now
            </button>

          </div>

          
          {wishlistAdded && (
            <p className="text-pink-400 mt-4">
              Product added to wishlist!
            </p>
          )}

          {cartAdded && (
            <p className="text-green-400 mt-2">
              Product added to cart!
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
