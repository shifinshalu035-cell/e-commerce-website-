import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import imag from "/login.jpeg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const res = await axios.get("http://localhost:3002/users");

      const user = res.data.find(
        (u) =>
          u.email === email.trim() &&
          u.password === password.trim()
      );

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        alert("Login Successful");
        navigate("/");
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${imag})` }}
    >
      <div className="
        bg-white/70 
        backdrop-blur-md 
        w-full 
        max-w-sm 
        p-5 
        rounded-3xl 
        border 
        border-white/50 
        shadow-2xl
      ">
     <h1 className="text-xl font-bold text-center text-gray-950 mb-1 pixel-font">
          Welcome Back to Stickora
        </h1>
 <p className="text-gray-700 text-center mb-4 text-sm pixel-font">
          Login to your account
        </p>
        <div className="relative mb-3">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            text-gray-900
            rounded-full
            pl-4
            p-2.5
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-sky-500
            "
          />
        </div>
<div className="relative mb-2">
          <input
            type={showPassword ? "text":"password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="
            w-full
            bg-gray-50
            border
            border-gray-200
            text-gray-900
            rounded-full
            pl-4
            pr-10
            p-2.5
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-sky-500
            "
          />
          <button
            type="button"
            onClick={()=>setShowPassword(!showPassword)}
            className="
            absolute
            right-4
            top-2.5
            text-gray-500
            text-sm
            "
          >
          
          </button>
        </div>

        
        <div className="flex justify-end mb-4">
          <a
            href="#"
            className="text-sky-700 font-medium hover:underline text-xs"
          >
            Forgot password?
          </a>
        </div>
        <button
          onClick={handleLogin}
          className="
          w-full
          bg-gray-900
          hover:bg-black
          text-white
          p-2.5
          rounded-full
          text-sm
          font-semibold
          transition
          shadow-md
          "
        >
          Get Started
        </button>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
      
        </div>
        <p className="text-center text-gray-700 text-xs">
          New User?{" "}
          <Link
            to="/register"
            className="
            text-sky-700
            font-bold
            hover:underline
            "
          >
            Register Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;