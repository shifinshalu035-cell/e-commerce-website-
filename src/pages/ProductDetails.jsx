import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";
function ProductDetails() {
const { id } = useParams();
const dispatch = useDispatch();
const navigate = useNavigate();
const [product, setProduct] = useState(null);
const [selectedImage, setSelectedImage] = useState(0);
const [wishlistAdded, setWishlistAdded] = useState(false);
const [cartAdded, setCartAdded] = useState(false);



  // fetch ivede done 

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await axios.get(
          `http://localhost:3002/products/${id}`
        );


        console.log("Product ID:", id);
        console.log("Product Data:", res.data);


        setProduct(res.data);


        
        setSelectedImage(0);
        setCartAdded(false);
        setWishlistAdded(false);


      } catch (error) {

        console.log(error);

      }

    };
fetchProduct();
}, [id]);
 const handleWishlist = () => {

    dispatch(addToWishlist(product));

    setWishlistAdded(true);

  };
const handleCart = () => {

    dispatch(addToCart(product));

    setCartAdded(true);

  };
 const handleBuyNow = () => {
    dispatch(addToCart(product));

    navigate("/checkout");

  };
if (!product) {
 return (
<h1 className="text-white text-center mt-20 text-3xl">
        Loading...
      </h1>

    );
}
return (
<div className="min-h-screen bg-black text-white p-8">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
<div>
<img
src={Array.isArray(product.image)
    ? product.image[selectedImage]
    : product.image
            }
alt={product.title}
className="w-full h-[280px] object-cover rounded-xl"

          />{
            Array.isArray(product.image) && (
            <div className="flex gap-3 mt-5 overflow-x-auto">
{
product.image.map((img,index)=>(
<img
key={index}
src={img}
alt={product.title}
onClick={() =>
setSelectedImage(index)
}
className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2
${selectedImage === index
                          ? "border-red-500"
                          : "border-gray-700"
                        }
                      `}

                    />


                  ))
                }


              </div>

            )
          }


        </div>
<div>
<h1 className="text-4xl font-bold mb-4 pixel-font">
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
<div className="flex gap-4 flex-wrap">
 <button
onClick={handleWishlist}
disabled={wishlistAdded}
 className={`px-6 py-3 rounded-lg
${ wishlistAdded
      ? "bg-pink-700"
       : "bg-red-500 hover:bg-red-600"
              }

              `}

            >

              {
                wishlistAdded
                ? "❤️ Added"
                : "❤️ Wishlist"
              }


            </button>
<button

              onClick={handleCart}

              disabled={cartAdded}

              className={`px-6 py-3 rounded-lg

              ${
                cartAdded
                ? "bg-green-700"
                : "bg-green-500 hover:bg-green-600"
              }

              `}

            >

              {
                cartAdded
                ? "✅ Added"
                : "🛒 Add Cart"
              }


            </button>
<button

              onClick={handleBuyNow}

              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700"

            >

              ⚡ Buy Now

            </button>



          </div>


 {
            wishlistAdded && (

              <p className="text-pink-400 mt-4">

                Product added to wishlist!

              </p>

            )
          }





          {
            cartAdded && (

              <p className="text-green-400 mt-2">

                Product added to cart!

              </p>

            )
          }
</div>
</div>
      </div>

  );

}


export default ProductDetails;