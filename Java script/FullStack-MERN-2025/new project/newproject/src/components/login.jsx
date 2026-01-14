export default function LoginPage() {
    return (
      <div className="h-screen w-full bg-linear-to-br from-[#f6f9fc] via-[#e9f0ff] to-[#d2e3ff] animate-gradientShift flex items-center justify-center">
        <div className="backdrop-blur-xl bg-white/60 shadow-xl rounded-2xl p-10 w-80 animate-fadeIn border border-white/40">
          <h2 className="text-center text-3xl font-semibold text-gray-800 mb-6">
            Welcome Back
          </h2>
   
          {/* Email */}
          <div className="mb-4">
            <label className="text-gray-700 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
   
          {/* Password */}
          <div className="mb-6">
            <label className="text-gray-700 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 rounded-xl bg-white/80 text-gray-800 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
   
          {/* Button */}
          <button className="w-full py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold duration-300 shadow-sm">
            Login
          </button>
   
          {/* Signup */}
          <p className="mt-5 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    );
  }