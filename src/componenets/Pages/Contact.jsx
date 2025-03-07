import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center  py-12">
      <div className=" p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          We'd love to hear from you! Please fill out the form below to get in
          touch.
        </p>

        <form className="space-y-6">
          {/* Name Input */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
