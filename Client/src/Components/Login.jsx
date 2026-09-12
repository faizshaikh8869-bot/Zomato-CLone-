import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../assets/IndiaPageBg-Img.avif";

function Login() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [toast, setToast] = useState(null);
  const [isLogin ,setIsLogin] =useState(true);

  const navigate = useNavigate();

  // input handler
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // API call (REGISTER / LOGIN)
  const handleSubmit = async () => {
    try {
      const response = axios.post("http://localhost:4000/user/register", formData)

      console.log("Success:");
      
      navigate("/india");
    } catch (err) {
      console.log("Error:", err.response?.data || err.message);
    }
  };

  
  return(
  isLogin && (
    <div className="h-screen w-screen flex justify-center items-center">

      {/* LEFT IMAGE */}
      <div className="h-full w-[54%]">
        <img
          src={image}
          alt="login"
          className="h-full w-full object-cover"
        />
      </div>

      {/* RIGHT FORM */}
      <div className="h-full w-[46%] flex justify-center items-center bg-amber-50">
        <div className="w-full text-center">

          {/* NAME */}
          <div className="flex justify-center gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border p-2 rounded-xl"
            />

            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border p-2 rounded-xl"
            />
          </div>

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded-xl w-[80%] mt-6"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded-xl w-[80%] mt-6"
          />

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="border mt-8 px-6 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
          >
            Submit
          </button>

          {/* SIGNUP */}
          <div className="flex justify-center gap-2 mt-4">
            <p>Don't have an account?</p>

            <button
              className="text-blue-500"
              onClick={() => navigate("/india/signup")}
            >
              Sign up
            </button>
          </div>

        </div>
      </div>
    </div>
  )
  )
}

export default Login;