import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import loginBg from "../assets/login-bg.PNG";

function Navbar() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);


  const handleSearch = async (e) => {

    const value = e.target.value;

    setSearch(value);


    if (!value.trim()) {
      setResults([]);
      return;
    }


    try {

      const res = await axios.get(
        "http://localhost:3002/products"
      );


      const filteredProducts = res.data.filter(
        (item) =>
          item.title
          .toLowerCase()
          .includes(value.toLowerCase())
      );
setResults(filteredProducts);
} catch(error){
console.log(error);
 }};
const handleLogout = () => {
localStorage.removeItem("user");

    navigate("/login");

  };



  return (

<motion.nav

initial={{
  y:-80,
  opacity:0
}}

animate={{
  y:0,
  opacity:1
}}

transition={{
  duration:0.6,
  ease:"easeOut"
}}

className="
bg-black/90
backdrop-blur-md
text-white
flex
items-center
justify-between
px-8
py-4
sticky
top-0
z-50
shadow-lg
"

>


{/* LOGO */}

<div>

<Link

to="/"

className="
text-2xl
font-bold
text-red-500
pixel-font
hover:scale-110
transition
duration-300
bitcount-font

"

>

Stickora

</Link>

</div>



{/* MENU */}

<div className="flex gap-6 bitcount-font">


<Link

to="/"

className="
hover:text-red-500
transition
duration-300
"

>

Home

</Link>



<Link

to="/register"

className="
hover:text-red-500
transition
duration-300
"

>

Register

</Link>



<Link

to="/checkout"

className="
hover:text-red-500
transition
duration-300
"

>

Checkout

</Link>



<Link

to="/orders"

className="
hover:text-red-500
transition
duration-300
"

>

Orders

</Link>


</div>





{/* SEARCH */}


<div className="relative">


<input

type="text"

placeholder="Search Products..."

value={search}

onChange={handleSearch}

className="
px-3
py-2
rounded-full
w-70
bg-black
border
border-gray-500
text-white
focus:outline-none
focus:border-red-500
transition
"

/>



<AnimatePresence>


{

results.length > 0 && (

<motion.div

initial={{
opacity:0,
y:-10
}}

animate={{
opacity:1,
y:0
}}

exit={{
opacity:0,
y:-10
}}

className="
absolute
top-12
left-0
w-72
bg-white
text-black
rounded-lg
shadow-xl
overflow-hidden
"


>


{

results.map((item)=>(


<Link

key={item.id}

to={`/product/${item.id}`}

onClick={()=>{

setSearch("");

setResults([]);

}}

>


<div

className="
p-3
border-b
hover:bg-gray-100
transition
"

>

{item.title}

</div>


</Link>


))

}


</motion.div>

)

}


</AnimatePresence>


</div>










<div className="flex gap-5 items-center pixel-font">


<Link
to="/cart" className="
hover:text-red-500
transition
"

>

🛒 

</Link>



<Link

to="/wishlist"

className="
hover:text-red-500
transition
"

>

❤️ 

</Link>




{

user ? (
<>
<span>
{user.name}
</span>
<button
onClick={handleLogout}
className="
bg-gray-700
px-4
py-2
rounded-full
hover:bg-gray-600
transition
"
>Logout
</button>
</>
):(
<Link
to="/login"
className="
px-5
py-2
rounded-full
text-white
font-bold
bg-cover
bg-center
bg-black/40
border
border-white/20
backdrop-blur-md
hover:scale-105
transition
shadow-xl
bitcount-font
" style={{
backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${loginBg})`
}}>
Login
</Link>
)
}
</div>
</motion.nav>
);
}
export default Navbar;