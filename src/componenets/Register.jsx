import React from "react";


function Register({ openLogin }) {


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">

<h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            required={true}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            required={true}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your Email"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            required={true}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your Password"
          />
        </div>

        <div className="mb-4 py-4">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
             Sign Up 
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Already Have an Account?</span>
        <button className="text-red-800 ml-2" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Register;
