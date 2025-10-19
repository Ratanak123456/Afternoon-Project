import { useState } from "react";

import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import Loader from "../loader/Loader";

type ValueTypes = {
    email: string;
    password: string;
};

const initialValues: ValueTypes = {
    email: "john@mail.com",
    password: "changeme",
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required"),
});



// 🛠️ Improved LoginForm component
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  // Handle login submit
  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed!");

      console.log("✅ Login Success:", data);
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        navigate("/");
      }
    } catch (error) {
      console.error("❌ Login Error:", error);
      alert(error instanceof Error ? error.message : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-900 to-blue-600">
        <Loader />
      </div>
    );
  }

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1500&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-5xl rounded-2xl overflow-hidden shadow-xl">
        {/* Left side text */}
        <div className="flex-1 bg-transparent text-white p-10 flex flex-col justify-center">
          <h3 className="text-lime-400 font-semibold text-lg mb-2">I TRAVEL</h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            BEYOND <br /> BORDERS
          </h1>
          <p className="text-gray-200 text-lg">
            Unlock the world. Let your wanderlust lead you to your dream destinations.
          </p>
        </div>

        {/* Right side form */}
        <div className="flex-1 backdrop-blur-md bg-white/10 p-8 md:p-10 text-white">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign in</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col space-y-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-900 focus:ring-2 focus:ring-lime-400 outline-none"
                />
                <ErrorMessage name="email" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 rounded-md bg-white/80 text-gray-900 focus:ring-2 focus:ring-lime-400 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700"
                  >
                    {showPassword ? <IoEyeOffSharp size={20} /> : <IoEyeSharp size={20} />}
                  </button>
                </div>
                <ErrorMessage name="password" component="p" className="text-red-400 text-sm mt-1" />
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <a href="#" className="text-sm text-[var(--color-primary)] hover:underline">Forgot password?</a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[var(--color-primary)] text-gray-50 font-semibold py-2 rounded-md hover:bg-[var(--color-primary-hover)]   transition duration-200"
              >
                Sign in
              </button>

              {/* Divider */}
              <div className="flex items-center my-4">
                <hr className="flex-1 border-gray-500" />
                <span className="px-2 text-sm text-gray-300">or</span>
                <hr className="flex-1 border-gray-500" />
              </div>

              {/* Social Login */}
              <div className="flex gap-3 justify-center">
                <button className="bg-white text-gray-800 px-6 py-2 rounded-md flex items-center gap-2 shadow hover:bg-gray-100">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5" />
                  Google
                </button>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-md flex items-center gap-2 shadow hover:bg-gray-100">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png" alt="apple" className="w-[22px] h-[22px]" />
                  Facebook 
                </button>
              </div>

              {/* Sign Up */}
              <p className="text-center text-sm mt-4 text-gray-200">
                Don’t have an account?{" "}
                <a href="#" className="text-lime-300 font-medium hover:underline">
                  Sign Up
                </a>
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}