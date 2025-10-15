import { useState, useEffect } from "react";

function Button({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`transition font-semibold rounded-md px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default function Auth() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState("Sign In");
  const [subtitle, setSubtitle] = useState("Welcome back! Please log in to continue.");

  useEffect(() => {
    // Dynamically update titles when switching modes
    if (mode === "signin") {
      setTitle("Sign In");
      setSubtitle("Welcome back! Please log in to continue.");
    } else {
      setTitle("Sign Up");
      setSubtitle("Create your account and start your journey!");
    }
  }, [mode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === "signup" && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log(
      mode === "signin" ? "Logging in:" : "Registering:",
      email,
      password
    );
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Glassy Auth Card */}
      <div className="relative z-10 bg-white/20 backdrop-blur-md p-10 rounded-2xl shadow-xl w-[400px] text-white">
        <h2 className="text-3xl font-bold mb-2 text-center">{title}</h2>
        <p className="text-gray-200 text-center mb-6">{subtitle}</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-black"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-black"
            />
          </div>

          {mode === "signup" && (
            <div className="mb-4">
              <label className="block mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-400 text-black"
              />
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-black py-2 mt-2"
          >
            {mode === "signin" ? "Sign In" : "Sign Up"}
          </Button>
        </form>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-400"></div>
          <span className="px-3 text-white text-sm">or</span>
          <div className="flex-grow h-px bg-gray-400"></div>
        </div>

        <div className="flex justify-center gap-3">
          <Button className="bg-white text-black flex items-center gap-2">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />{" "}
            Google
          </Button>
          <Button className="bg-white text-black flex items-center gap-2">
            <img
              src="https://www.svgrepo.com/show/452210/apple-black.svg"
              alt="Apple"
              className="w-5 h-5"
            />{" "}
            Apple
          </Button>
        </div>

        <p className="text-center mt-6 text-sm">
          {mode === "signin" ? (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setMode("signup")}
                className="underline font-semibold cursor-pointer"
              >
                Sign Up
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setMode("signin")}
                className="underline font-semibold cursor-pointer"
              >
                Sign In
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
