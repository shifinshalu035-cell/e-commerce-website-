import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [image,setImage] = useState(product.images[0]);


  const handleCart = () => {
    dispatch(addToCart(product));
  };

  const handleWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-2xl transition">
      <div>
        onMouseEnter{()=> setImage(product.image[1])}
        onMouseLeave{()=> setImage(product.image[0])}
       <img src={product.image} alt={product.title} className="w-full h-52 object-cover rounded-lg" />
       </div>
       <h3 className="text-xl font-bold mt-3">{product.title}</h3>
       <p className="text-gray-500">{product.category}</p>
       <p className="text-2xl font-bold text-green-600"> ₹{product.price}</p>
       <div className="flex gap-2 mt-3">
        <button onClick={handleWishlist}
        className="bg-pink-500 text-white px-3 py-2 rounded  ">
          ❤️

        </button>
        <button className="bg-pink-500 text-white px-3 py-2 rounded " onClick={handleCart}>
          🛒

        </button>

       </div>
       <Link to={`/products/${products.id}`} className="block mt-3 bg-black text-white text-center py-2 rounded ">
         view deatails 
       </Link>

    </div>
  );
}

export default ProductCard;