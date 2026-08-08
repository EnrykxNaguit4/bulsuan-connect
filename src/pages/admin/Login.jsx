import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import toast from "react-hot-toast";

import { FaEye, FaEyeSlash } from "react-icons/fa";


function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      toast.success("Welcome back!");

      navigate("/admin/dashboard");

    } catch (error) {
      console.error(error);

      toast.error("Invalid email or password.");

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-700 via-green-600 to-green-500 flex items-center justify-center px-4">

      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10">

        <div className="text-center">

          <h1 className="text-4xl font-bold text-green-700">
            BulSUan Connect
          </h1>

          <p className="text-gray-500 mt-3">
            Local Student Council
          </p>

          <p className="text-gray-400 text-sm mt-1">
            Administrator Login
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-xl p-3 mt-2"
              placeholder="admin@email.com"
            />

          </div>

          <div>

            <label className="font-medium">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-xl p-3 pr-12"
                placeholder="••••••••"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword
                  ? <FaEyeSlash />
                  : <FaEye />}
              </button>

            </div>

          </div>

          <button
            disabled={loading}
            className="w-full bg-green-700 hover:bg-green-800 text-white rounded-xl py-3 font-semibold transition disabled:opacity-60"
          >
            {loading
              ? "Signing In..."
              : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;