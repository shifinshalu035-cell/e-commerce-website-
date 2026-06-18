import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>

      <Link to="/login">Login</Link>

      <Link to="/register">Register</Link>

      <Link to="/cart"> Cart </Link>
      <Link to="/wishlist "> Wishlist  </Link>
      <Link to= "/premium"> Premium </Link>
      <Link to="/customize">Customize </Link>
      <Link to="/checkout" >Checkout</Link>
      <Link to="/orders"> Orders</Link>

    </nav>
  );
}

export default Navbar;