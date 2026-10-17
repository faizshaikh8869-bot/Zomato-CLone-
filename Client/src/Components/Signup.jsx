import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/IndiaPageBg-Img.avif";
import axios from 'axios';
import useUser from "../Hooks/UseUser.hook.jsx";

const API_URL ="http://localhost:3000";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errorAlert, setErrorAlert] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();
  const { login } = useUser();

  // input handler
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear the error popup as soon as the user starts typing again
    if (errorAlert) setErrorAlert("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorAlert("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/user/register`, formData, {
        withCredentials: true,
      });

      const token = response.data?.accessToken;
      if (!token) {
        setErrorAlert("Authentication failed. No token received.");
        return;
      }

      login(token, response.data.user);
      navigate("/Location");

    } catch (err) {
      console.log(err);
      
      if (err.response?.status === 409) {
        setErrorAlert("An account with this email already exists.");
      } else {
        setErrorAlert(err.response?.data?.message || "Registration failed. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
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
        <form className="w-full text-center" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            type="text"
            name="name"
            required
            minLength={4}
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border p-2 rounded-xl w-[80%]"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded-xl w-[80%] mt-6"
          />

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            required
            minLength={6}
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded-xl w-[80%] mt-6"
          />

          {errorAlert && (
            <p className="mt-4 mx-auto w-[80%] text-red-700" role="alert">{errorAlert}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="border mt-6 px-6 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
          >
            {isSubmitting ? "Creating account..." : "Sign up"}
          </button>

          {/* SIGNUP */}
          <div className="flex justify-center gap-2 mt-4">
            <p>Don't have an account?</p>
            <button
              className="text-blue-500"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup;
