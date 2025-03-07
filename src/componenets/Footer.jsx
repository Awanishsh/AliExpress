import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      {/* Main footer section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Company description */}
        <div className="w-full">
          <h3 className="text-xl font-semibold">AliExpress</h3>
          <p className="mt-4 text-gray-400">
            Your one-stop for all your needs. Shop with us and experience the
            best online shopping experience.
          </p>
        </div>

        {/* Quick Links section */}
        <div className="w-full flex flex-col">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us & Subscribe section */}
        <div className="w-full">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>

          <form className="flex items-center justify-center mt-6">
            <input
              type="email"
              className="w-full p-2 rounded-l-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter Email"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-lg border border-red-500 hover:bg-red-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer bottom section with copyright and links */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">&copy; 2025 AliExpress Clone. All rights reserved</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
