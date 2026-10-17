import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../assets/IndiaPageBg-Img.avif";
import axios from 'axios';
import useUser from "../Hooks/UseUser.hook.jsx";

const API_URL ="http://localhost:3000";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
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
    if (errorMessage) setErrorMessage("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API_URL}/user/login`, formData, {
        withCredentials: true,
      });

      const token = response.data?.accessToken;
      if (!token) {
        setErrorMessage("Login failed. The server did not return an access token.");
        return;
      };

      login(token, response.data.user);

      navigate("/Location");
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Login failed. Please try again.");
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
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border p-2 rounded-xl w-[80%] mt-6"
          />

          {/* BUTTON */}
          {errorMessage && (
            <p className="mt-4 text-red-700" role="alert">{errorMessage}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="border mt-8 px-6 py-2 rounded-xl bg-black text-white hover:scale-105 transition"
          >
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>

          {/* SIGNUP */}
          <div className="flex justify-center gap-2 mt-4">
            <p>Don't have an account?</p>

            <button
              className="text-blue-500"
              onClick={() => navigate("/auth/signup")}
            >
              Sign up
            </button>
          </div>

        </form>
      </div>
    </div>
  )

}

export default Login;