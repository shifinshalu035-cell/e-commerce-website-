import { Link,useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(
    localStorage.getItem("user")
  );
  const handleLogout = () =>{
     localStorage.removeItem("user");
     navigate("/login");
  };
  return (
    <nav className=" bg-black text-white flex items-center justify-between px-8 py-4 sticky  top-0 z-50">
<div className="flex flex-col items-center">
  <Link
    to="/"
    className="text-2xl font-bold text-red-500 pixel-font"
  >
    Stickora
  </Link>

  {/* <div className="w-20 h-2 border-b-4 border-red-500 rounded-full "></div> */}
</div>
      <div className="flex gap-6 pixel-font">
      <Link to="/" className="hover:text-red-500 transition ">Home</Link>

      

      <Link to="/register" className="hover:text-red-500 transition ">Register</Link>

      
      {/* <Link to= "/premium" className="hover:text-red-500 transition  "> Premium </Link> */}
      {/* <Link to="/customize" className="hover:text-red-500 transition ">Customize </Link> */}
      <Link to="/checkout" className="hover:text-red-500 transition " >Checkout</Link>
      <Link to="/orders" className="hover:text-red-500 transiton "> Orders</Link>
     </div>
     <div className="flex gap-6 pixel-font">
      <Link to="/cart" className="hover:text-red-500 transition "> Cart 🛒 </Link>
      <Link to="/wishlist " className="hover:text-red-500 transition "> Wishlist ❤️ </Link>
      {/* <Link to="/login" className="hover:text-red-500 transition">Login</Link> */}
      {user ?(
        <button onClick={handleLogout} className="hover:text-red-500 transition">
          Logout

        </button>
      ):(
        <Link to="/login" className="hover:text-red-500 transition">
          Login 
        </Link>
      )}
     </div>

    </nav>
  );
}

export default Navbar;