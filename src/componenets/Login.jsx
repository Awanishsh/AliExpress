import React from "react";

function Login({ openSignUp }) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            required={true}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your Email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            required={true}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your Password"
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <label htmlFor="remember" className="inline-flex items-center">
            <input
              id="remember"
              type="checkbox"
              required={true}
              className="form-checkbox text-red-600"
            />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <div className="mb-6">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Login
          </button>
        </div>
      </form>

      <div className="text-center mt-4">
        <span className="text-gray-700">Don't Have an Account?</span>{" "}
        <button
          className="text-red-600 hover:underline focus:outline-none"
          onClick={openSignUp}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
