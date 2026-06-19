import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className=" bg-black text-white flex items-center justify-between px-8 py-4 sticky  top-0 z-50">

      <div>
     <Link
     to="/"
     className="inline-block text-3xl font-bold text-red-500 hover:scale-110 transition-transform duration-300"
>
  Stickora
    </Link>
      </div>
      <div className="flex gap-6">
      <Link to="/" className="hover:text-red-500 transition">Home</Link>

      

      <Link to="/register" className="hover:text-red-500 transition">Register</Link>

      
      <Link to= "/premium" className="hover:text-red-500 transition"> Premium </Link>
      <Link to="/customize" className="hover:text-red-500 transition">Customize </Link>
      <Link to="/checkout" className="hover:text-red-500 transition" >Checkout</Link>
      <Link to="/orders" className="hover:text-red-500 transiton"> Orders</Link>
     </div>
     <div className="flex gap-6">
      <Link to="/cart" className="hover:text-red-500 transition"> Cart 🛒 </Link>
      <Link to="/wishlist " className="hover:text-red-500 transition"> Wishlist ❤️ </Link>
      <Link to="/login" className="hover:text-red-500 transition">Login</Link>
     </div>

    </nav>
  );
}

export default Navbar;