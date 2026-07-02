import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function ProductDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishlistAdded, setWishlistAdded] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);


  useEffect(() => {

    const fetchProduct = async () => {

      try {

        const res = await axios.get(
          `http://localhost:3002/products/${id}`
        );

        setProduct(res.data);
        setSelectedImage(0);

      } catch(error){
        console.log(error);
      }

    };

    fetchProduct();

  },[id]);




  const handleWishlist = async () => {

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
      alert("Please Login First");
      navigate("/login");
      return;
    }


    try{

      const existing = await axios.get(
        `http://localhost:3002/wishlist?userId=${user.id}&productId=${product.id}`
      );


      if(existing.data.length > 0){
        alert("Already in Wishlist ❤️");
        return;
      }


      await axios.post(
        "http://localhost:3002/wishlist",
        {
          userId:user.id,
          productId:product.id,
          title:product.title,
          price:product.price,
          image:product.image
        }
      );


      setWishlistAdded(true);


      setTimeout(()=>{
        setWishlistAdded(false);
      },2000);


    }catch(error){
      console.log(error);
    }

  };





  const handleCart = async()=>{


    const user = JSON.parse(localStorage.getItem("user"));


    if(!user){
      alert("Please Login First");
      navigate("/login");
      return;
    }



    try{


      const existing = await axios.get(
        `http://localhost:3002/cart?userId=${user.id}&productId=${product.id}`
      );


      if(existing.data.length > 0){
        alert("Already in Cart 🛒");
        return;
      }



      await axios.post(
        "http://localhost:3002/cart",
        {
          userId:user.id,
          productId:product.id,
          title:product.title,
          price:product.price,
          image:product.image,
          quantity:1
        }
      );


      setCartAdded(true);


      setTimeout(()=>{
        setCartAdded(false);
      },2000);


    }catch(error){
      console.log(error);
    }

  };




  const handleBuyNow = async()=>{

    await handleCart();
    navigate("/checkout");

  };




  if(!product){

    return(
      <h1 className="text-white text-center mt-20 text-3xl">
        Loading...
      </h1>
    )

  }





  return (

<div className="
min-h-screen
bg-gradient-to-br
from-black
via-zinc-950
to-black
text-white
p-8
anton-font
">


<div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-12
items-center
">
<div>
  <div className="
bg-zinc-900
rounded-3xl
p-5
border
border-zinc-800
shadow-2xl
">


<img

src={
Array.isArray(product.image)
?
product.image[selectedImage]
:
product.image
}

alt={product.title}

className="
w-full
h-[550px]
object-cover
rounded-2xl
hover:scale-105
transition
duration-500
"/>
</div>
{
Array.isArray(product.image) && (

<div className="
flex
gap-4
mt-6
overflow-x-auto
">
{
product.image.map((img,index)=>(


<img

key={index}

src={img}

alt=""

onClick={()=>setSelectedImage(index)}

className={`
w-24
h-24
object-cover
rounded-xl
cursor-pointer
border-2
transition

${
selectedImage===index
?
"border-red-500 scale-110"
:
"border-zinc-700"
}

`}

/>


))
}



</div>


)
}




</div>
<div className="
bg-zinc-900/70
backdrop-blur-xl
rounded-3xl
p-8
border
border-zinc-800
shadow-xl
">
<div className="flex gap-3 mb-5">
</div>
<h1 className="
text-5xl
font-bold
mb-5
">

{product.title}

</h1>




<p className="
text-5xl
font-bold
text-red-500
mb-6
">

₹{product.price}

</p>





<p className="
text-gray-300
leading-8
mb-8
">

{product.description}

</p>





{/* INFO CARDS */}


<div className="
grid
grid-cols-3
gap-4
mb-8
">


<div className="
bg-zinc-800
rounded-xl
p-4
text-center
">

<p className="text-gray-400 text-sm">
Category
</p>

<h3>
{product.category}
</h3>

</div>




<div className="
bg-zinc-800
rounded-xl
p-4
text-center
">

<p className="text-gray-400 text-sm">
Rating
</p>

<h3>
⭐ {product.rating}
</h3>

</div>





<div className="
bg-zinc-800
rounded-xl
p-4
text-center
">

<p className="text-gray-400 text-sm">
Stock
</p>

<h3>
{product.stock}
</h3>

</div>


</div>






{/* BUTTONS */}


=<div className="flex gap-4 mt-8">

  <button
    onClick={handleWishlist}
    className="
      border
      border-red-600
      text-red-500
      px-6
      py-3
      rounded-lg
      hover:bg-red-600
      hover:text-white
      transition
      duration-300
    "
  >
    ❤️ Wishlist
  </button>


  <button
    onClick={handleCart}
    className="
      bg-red-600
      text-white
      px-6
      py-3
      rounded-lg
      hover:bg-red-700
      transition
      duration-300
    "
  >
    🛒 Add Cart
  </button>


  <button
    onClick={handleBuyNow}
    className="
      bg-white
      text-black
      px-6
      py-3
      rounded-lg
      hover:bg-gray-200
      transition
      duration-300
    "
  >
    Buy Now
  </button>

</div>






{
wishlistAdded &&

<p className="
text-pink-400
mt-5
">

Added to Wishlist ❤️

</p>

}




{
cartAdded &&

<p className="
text-green-400
mt-3
">

Added to Cart 🛒

</p>

}





</div>


</div>


</div>

  );

}


export default ProductDetails;