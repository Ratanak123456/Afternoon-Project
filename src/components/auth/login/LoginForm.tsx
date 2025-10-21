import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/Loader";
import logo from "../../../assets/white.svg";

type ValueTypes = { email: string; password: string };
const initialValues: ValueTypes = {
  email: "john@mail.com",
  password: "changeme",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (values: typeof initialValues) => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Login failed!");
      if (data.access_token) {
        localStorage.setItem("token", data.access_token);
        navigate("/");
      }
    } catch (error) {
      alert(error instanceof Error ? error.message : "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black/20 backdrop-blur-sm">
        <Loader />
      </div>
    );
  }

  return (
    <main
      className="min-h-screen flex justify-center items-center bg-cover bg-center relative font-poppins"
      style={{
        backgroundImage:
          "url('https://lp-cms-production.imgix.net/2024-09/cambodia-island-hopping-koh-rong-boats.jpg?auto=format,compress&q=72&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Container */}
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md">
        {/* Left: Background Text */}
        <div className="flex-1 bg-transparent text-white p-12 flex flex-col justify-center">
          <div className="flex">
            <img src={logo} alt="logo" className="w-auto h-10" />
            <h3 className="text-white font-semibold text-lg mt-3 tracking-wide uppercase">
              KechTease
            </h3>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            BEYOND <br /> BORDERS
          </h1>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed">
            Unlock the world. Let your wanderlust lead you to your dream
            destinations. Explore new places, meet new people, and create
            unforgettable memories.
          </p>
        </div>

        {/* Right: Form */}
        <div className="flex-1 bg-white/20 backdrop-blur-xl p-10 text-gray-900 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--color-primary)]">
            Sign In
          </h2>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col space-y-5">
              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Email
                </label>
                <Field
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[var(--color-primary)] outline-none transition"
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
                  >
                    {showPassword ? (
                      <IoEyeOffSharp size={20} />
                    ) : (
                      <IoEyeSharp size={20} />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Forgot */}
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-[var(--color-primary)]/70 hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-md"
              >
                Sign In
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-2">
                <hr className="flex-1 border-gray-400/40" />
                <span className="text-gray-500 text-sm">or</span>
                <hr className="flex-1 border-gray-400/40" />
              </div>

              {/* Social login */}
              <div className="flex gap-4 justify-center">
                <button className="bg-white/40 text-gray-800 px-7 py-2.5 rounded-lg flex items-center gap-2 shadow hover:bg-gray-100/70 transition">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Google
                </button>
                <button className="bg-white/40 text-gray-800 px-5 py-2.5 rounded-lg flex items-center gap-2 shadow hover:bg-gray-100/70 transition">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                    alt="facebook"
                    className="w-5 h-5 bg-white rounded-full"
                  />
                  Facebook
                </button>
              </div>

              {/* Sign up */}
              <p className="text-center text-sm mt-4 text-gray-700">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="text-[var(--color-primary)] font-semibold hover:underline"
                >
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
