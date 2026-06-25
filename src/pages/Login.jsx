// // import axios from "axios";
// // import { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";

// // function Login() {
// //   const navigate = useNavigate();

// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async () => {
// //     try {
// //       const res = await axios.get(
// //         `http://localhost:3002/users?email=${email}&password=${password}`
// //       );

// //       console.log(res.data);

// //       if (res.data.length > 0) {

// //         localStorage.setItem(
// //           "user",
// //           JSON.stringify(res.data[0])
// //         );

// //         alert("Login Successful");

// //         navigate("/");

// //       } else {

// //         alert(
// //           "User not found. Please Register."
// //         );

// //         navigate("/register");
// //       }

// //     } catch (error) {
// //       console.log(error);

// //       alert("Login Failed");
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

// //       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

// //         <h1 className="text-4xl font-bold text-center mb-2">
// //           Welcome Back
// //         </h1>

// //         <p className="text-gray-500 text-center mb-8">
// //           Login to your Stickora account
// //         </p>

// //         <input
// //           type="email"
// //           placeholder="Enter your email"
// //           className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
// //           onChange={(e) =>
// //             setEmail(e.target.value)
// //           }
// //         />

// //         <input
// //           type="password"
// //           placeholder="Enter your password"
// //           className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
// //           onChange={(e) =>
// //             setPassword(e.target.value)
// //           }
// //         />

// //         <button
// //           onClick={handleLogin}
// //           className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
// //         >
// //           Login
// //         </button>

// //         <p className="text-center mt-6 text-gray-600">
// //           New User?{" "}
// //           <Link
// //             to="/register"
// //             className="text-red-600 font-semibold hover:underline"
// //           >
// //             Register Here
// //           </Link>
// //         </p>

// //       </div>

// //     </div>
// //   );
// // }

// // export default Login;
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   // const navigate = useNavigate();

//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");

//   // const handleLogin = async () => {
//   //   try {
//   //     const cleanEmail = email.trim();
//   //     const cleanPassword = password.trim();

//   //     console.log("Email:", cleanEmail);
//   //     console.log("Password:", cleanPassword);

//   //     const res = await axios.get(
//   //       `http://localhost:3002/users?email=${cleanEmail}&password=${cleanPassword}`
//   //     );

//   //     console.log("Response:", res.data);

//   //     if (res.data.length > 0) {
//   //       localStorage.setItem(
//   //         "user",
//   //         JSON.stringify(res.data[0])
//   //       );

//   //       alert("Login Successful");

//   //       navigate("/");
//   //     } else {
//   //       alert(
//   //         "User not found. Please Register."
//   //       );
//   //     }
//   //   } catch (error) {
//   //     console.log("Login Error:", error);

//   //     alert("Login Failed");
//   //   }
//   // };
//   const handleLogin = async () => {
//   try {
//     const res = await axios.get(
//       "http://localhost:3002/users"
//     );

//     const user = res.data.find(
//       (u) =>
//         u.email === email.trim() &&
//         u.password === password.trim()
//     );

//     if (user) {
//       localStorage.setItem(
//         "user",
//         JSON.stringify(user)
//       );

//       alert("Login Successful");
//       navigate("/");
//     } else {
//       alert("Invalid Email or Password");
//     }

//   } catch (error) {
//     console.log(error);
//   }
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
//       <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

//         <h1 className="text-4xl font-bold text-center mb-2">
//           Welcome Back
//         </h1>

//         <p className="text-gray-500 text-center mb-8">
//           Login to your Stickora account
//         </p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) =>
//             setEmail(e.target.value)
//           }
//           className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) =>
//             setPassword(e.target.value)
//           }
//           className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
//         />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
//         >
//           Login
//         </button>

//         <p className="text-center mt-6 text-gray-600">
//           New User?{" "}
//           <Link
//             to="/register"
//             className="text-red-600 font-semibold hover:underline"
//           >
//             Register Here
//           </Link>
//         </p>

//       </div>
//     </div>
//   );
// }

// export default Login;
import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3002/users"
      );

      const user = res.data.find(
        (u) =>
          u.email === email.trim() &&
          u.password === password.trim()
      );

      if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify(user)
        );

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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Login to your Stickora account
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Login
        </button>

        <p className="text-center mt-6 text-gray-600">
          New User?{" "}
          <Link
            to="/register"
            className="text-red-600 font-semibold hover:underline"
          >
            Register Here
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Login;