import { useState } from "react";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const toggleForm = () => setIsRegister(!isRegister);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirm = () => setShowConfirm(!showConfirm);

  // Validation Schemas
  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const registerSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().email("Invalid Gmail").required("Gmail is required"),
    password: Yup.string().min(6, "Min 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });

  // Handle Submit
  type LoginValues = {
    email: string;
    password: string;
  };

  type RegisterValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const handleSubmit = async (values: LoginValues | RegisterValues) => {
    setLoading(true);
    try {
      if (isRegister) {
        // Register API
        const regValues = values as RegisterValues;
        const userData = {
          name: `${regValues.firstName} ${regValues.lastName}`,
          email: regValues.email,
          password: regValues.password,
          avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        };

        const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(userData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Registration failed!");

        Swal.fire({
          icon: "success",
          title: "Account Created!",
          text: "Welcome aboard, traveler!",
          showConfirmButton: false,
          timer: 2000,
          background: "#f0f9ff",
          color: "#0f172a",
        });

        setTimeout(() => navigate("/"), 2000);
      } else {
        // Login API
        const loginRes = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });

        const loginData = await loginRes.json();
        if (!loginRes.ok) throw new Error(loginData.message || "Login failed!");

        // Store token
        localStorage.setItem("token", loginData.access_token);

        // Show success toast
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back, adventurer 🌍",
          showConfirmButton: false,
          timer: 2000,
          background: "#ecfdf5",
          color: "#065f46",
        });

        // Fetch user profile after successful login
        const userRes = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
          headers: {
            Authorization: `Bearer ${loginData.access_token}`,
            "Content-Type": "application/json",
          },
        });
        const userData = await userRes.json();
        if (!userRes.ok) throw new Error(userData.message || "Failed to fetch user profile");

        // Store user data in localStorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: userData.name,
            email: userData.email,
            avatar: userData.avatar,
          })
        );

        // Navigate back to home after a short delay so the toast shows
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err instanceof Error ? err.message : "Something went wrong!",
        confirmButtonColor: "#2563eb",
      });
    } finally {
      setLoading(false);
    }
  };

  const loginInitial = { email: "", password: "" };
  const registerInitial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

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
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-6xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-md transition-all duration-500">
        {/* Left Section */}
        <div className="flex-1 bg-transparent text-white p-12 flex flex-col justify-center">
          <h3 className="text-white font-semibold text-lg mb-4 uppercase tracking-wide">
            {isRegister ? "Join Us" : "I TRAVEL"}
          </h3>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            {isRegister ? "CREATE YOUR JOURNEY" : "BEYOND BORDERS"}
          </h1>
          <p className="text-gray-200 text-lg max-w-lg leading-relaxed">
            {isRegister
              ? "Create your account and start your adventure today!"
              : "Login to continue exploring amazing destinations."}
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white/20 backdrop-blur-xl p-10 text-gray-900 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 text-center text-[var(--color-primary)]">
            {isRegister ? "Sign Up" : "Sign In"}
          </h2>

          <Formik
            initialValues={isRegister ? registerInitial : loginInitial}
            validationSchema={isRegister ? registerSchema : loginSchema}
            onSubmit={handleSubmit}
          >
            <Form className="flex flex-col space-y-5">
              {/* Register Form */}
              {isRegister && (
                <>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">First Name</label>
                    <Field name="firstName" placeholder="Enter first name" className="w-full px-4 py-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"/>
                    <ErrorMessage name="firstName" component="p" className="text-red-500 text-sm mt-1"/>
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">Last Name</label>
                    <Field name="lastName" placeholder="Enter last name" className="w-full px-4 py-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"/>
                    <ErrorMessage name="lastName" component="p" className="text-red-500 text-sm mt-1"/>
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <Field name="email" type="email" placeholder="Enter email" className="w-full px-4 py-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"/>
                <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1"/>
              </div>

              {/* Password */}
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <Field name="password" type={showPassword ? "text" : "password"} placeholder="Enter password" className="w-full px-4 py-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"/>
                  <button type="button" onClick={handleShowPassword} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">{showPassword ? <IoEyeOffSharp size={20}/> : <IoEyeSharp size={20}/> }</button>
                </div>
                <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1"/>
              </div>

              {/* Confirm Password */}
              {isRegister && (
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
                  <div className="relative">
                    <Field name="confirmPassword" type={showConfirm ? "text" : "password"} placeholder="Confirm password" className="w-full px-4 py-3 rounded-lg bg-white/90 focus:ring-2 focus:ring-[var(--color-primary)] outline-none"/>
                    <button type="button" onClick={handleShowConfirm} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600">{showConfirm ? <IoEyeOffSharp size={20}/> : <IoEyeSharp size={20}/> }</button>
                  </div>
                  <ErrorMessage name="confirmPassword" component="p" className="text-red-500 text-sm mt-1"/>
                </div>
              )}

              {/* Submit */}
              <button type="submit" disabled={loading} className={`${loading ? "bg-[var(--color-primary-hover)] cursor-not-allowed" : "bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)]"} text-white font-semibold py-3 rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-300`}>
                {loading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
                    </svg>
                    {isRegister ? "Creating..." : "Signing In..."}
                  </>
                ) : isRegister ? "Sign Up" : "Sign In"}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-2">
                <hr className="flex-1 border-gray-400/40" />
                <span className="text-gray-500 text-sm">or</span>
                <hr className="flex-1 border-gray-400/40" />
              </div>

              {/* Static Google & Facebook Buttons */}
              <div className="flex gap-4 justify-center">
                <button type="button" onClick={() => { Swal.fire({icon:"success", title:"Logged in with Google!", showConfirmButton:false, timer:1500, background:"#f0f9ff", color:"#0f172a"}); setTimeout(()=>navigate("/"),1500);}} className="bg-white/40 text-gray-800 px-7 py-2.5 rounded-lg flex items-center gap-2 shadow hover:bg-gray-100/70 transition">
                  <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" className="w-5 h-5"/> Google
                </button>
                <button type="button" onClick={() => { Swal.fire({icon:"success", title:"Logged in with Facebook!", showConfirmButton:false, timer:1500, background:"#f0f9ff", color:"#0f172a"}); setTimeout(()=>navigate("/"),1500);}} className="bg-white/40 text-gray-800 px-5 py-2.5 rounded-lg flex items-center gap-2 shadow hover:bg-gray-100/70 transition">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="facebook" className="w-5 h-5 bg-white rounded-full"/> Facebook
                </button>
              </div>

              {/* Toggle Form */}
              <p className="text-center text-sm mt-4 text-gray-700">
                {isRegister ? (
                  <>Already have an account? <button type="button" onClick={toggleForm} className="text-[var(--color-primary)] font-semibold hover:underline">Sign In</button></>
                ) : (
                  <>Don’t have an account? <button type="button" onClick={toggleForm} className="text-[var(--color-primary)] font-semibold hover:underline">Sign Up</button></>
                )}
              </p>
            </Form>
          </Formik>
        </div>
      </div>
    </main>
  );
}
