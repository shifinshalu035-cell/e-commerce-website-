import { useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Navbar(){
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [search,setSearch] = useState("");
  const [results,setResults] = useState([]);
 
  const handleLogout = () =>{
    localStorage.removeItem("user");
    navigate("/login");
  };
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
  } catch (error) {
    console.log(error);
  }
};
       return (
    <nav className="bg-black text-white flex items-center justify-between px-8 py-4 sticky top-0 z-50">

      <div className="flex flex-col items-center">
        <Link
          to="/"
          className="text-2xl font-bold text-red-500 pixel-font"
        >
          Stickora
        </Link>
      </div>

      <div className="flex gap-6 pixel-font">
        <Link
          to="/"
          className="hover:text-red-500 transition"
        >
          Home
        </Link>

        <Link
          to="/register"
          className="hover:text-red-500 transition"
        >
          Register
        </Link>

        <Link
          to="/checkout"
          className="hover:text-red-500 transition"
        >
          Checkout
        </Link>

        <Link
          to="/orders"
          className="hover:text-red-500 transition"
        >
          Orders
        </Link>
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Search Products..."
          value={search}
          onChange={handleSearch}
          className="px-3 py-2 rounded-4xl text-white w-64 border "
        />

        {results?.length > 0 && (
          <div className="absolute top-12 left-0 w-64 bg-white text-black rounded-lg shadow-lg overflow-hidden">
            {results.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                onClick={() => {
                  setSearch("");
                  setResults([]);
                }}
              >
                <div className="p-3 border-b hover:bg-gray-100">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-6 pixel-font">

        <Link
          to="/cart"
          className="hover:text-red-500 transition"
        >
          Cart 
        </Link>

        <Link
          to="/wishlist"
          className="hover:text-red-500 transition"
        >
          Wishlist 
        </Link>

 {user ? (
  <>
    <span>{user.name}</span>

    <button
      onClick={() => {
        localStorage.removeItem("user");
        window.location.reload();
      }}
      className="bg-gray-700 px-3 py-2 rounded-lg"
    >
      Logout
    </button>
  </>
) : (
  <Link
    to="/login"
    className="bg-red-500 px-4 py-2 rounded-lg"
  >
    Login
  </Link>
)}
      </div>

    </nav>
    
  );
}

export default Navbar;


