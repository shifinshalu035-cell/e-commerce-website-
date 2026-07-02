import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import imag from "/login.jpeg";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
    
      if (!name || !email || !password) {
        toast("Please fill all fields");
        return;
      }

      const existingUser = await axios.get(
        `http://localhost:3002/users?email=${email}`
      );

      if (existingUser.data.length > 0) {
        toast.error("Email already registered");
        return;
      }

      await axios.post("http://localhost:3002/users", {
        name,
        email,
        password,
      });

      toast.success("Registration Successful 🎉");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${imag})` }}
    >
      <div
        className="
        bg-white/70
        backdrop-blur-md
        w-full
        max-w-sm
        p-5
        rounded-3xl
        border
        border-white/50
        shadow-2xl
        "
      >
     
        <div className="flex justify-center mb-4">
          <div className="bg-white/90 p-3 rounded-full shadow-inner">
            <svg
              className="w-8 h-8 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M18 9v3m0 0v3m0-3h3m-3 0h-3M9 12a4 4 0 100-8 4 4 0 000 8zm-7 9a7 7 0 0114 0H2z"
              />
            </svg>
          </div>
        </div>

      
        <h1 className="text-2xl font-bold text-center text-gray-950 mb-1 pixel-font">
          Create Account
        </h1>

        <p className="text-center text-gray-700 mb-5 pixel-font">
          Register to join Stickora
        </p>

     
        <div className="relative mb-3">
          

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            rounded-full
            pl-12
            p-3
            text-base
            focus:outline-none
            focus:ring-2
            focus:ring-sky-500
            "
          />
        </div>

     
        <div className="relative mb-3">
         

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            rounded-full
            pl-12
            p-3
            text-base
            focus:outline-none
            focus:ring-2
            focus:ring-sky-500
            "
          />
        </div>

     
        <div className="relative mb-4">
         

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            rounded-full
            pl-12
            p-3
            text-base
            focus:outline-none
            focus:ring-2
            focus:ring-sky-500
            "
          />
        </div>

     
        <button
          onClick={handleRegister}
          className="
          w-full
          bg-gray-950
          hover:bg-black
          text-white
          p-3
          rounded-full
          font-semibold
          transition
          shadow-md
          pixel-font
          "
        >
          Create Account
        </button>

       
        <p className="text-center text-gray-700 text-sm mt-5">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-sky-700 font-bold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;