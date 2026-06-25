import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {

    try {

      const existingUser = await axios.get(
        `http://localhost:3002/users?email=${email}`
      );

      if (existingUser.data.length > 0) {
        alert("Email already registered");
        return;
      }

      await axios.post(
        "http://localhost:3002/users",
        {
          name,
          email,
          password
        }
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 shadow-lg rounded-xl">

      <h1 className="text-3xl font-bold mb-6">
        Register
      </h1>

      <input
        type="text"
        placeholder="Name"
        className="border p-3 w-full mb-4 rounded"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="border p-3 w-full mb-4 rounded"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-3 w-full mb-4 rounded"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={handleRegister}
        className="w-full bg-green-600 text-white py-3 rounded"
      >
        Register
      </button>

    </div>
  );
}

export default Register;