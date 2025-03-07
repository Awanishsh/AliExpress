import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import Login from "../componenets/Login.jsx";
import Register from "../componenets/Register.jsx";
import Modal from "../componenets/Modal";
import logo from "../Image/logo.png";

function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const navigate = useNavigate();
  const product = useSelector((state) => state.cart?.product || []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search-results/${search}`);
    }
  };

  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  return (
    <nav className="bg-white text-gray-900 shadow-md">
      {/* Top Bar */}
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center space-x-4">
          <button onClick={() => setIsCategoriesOpen(!isCategoriesOpen)} className="md:hidden">
            <FaBars className="text-xl" />
          </button>
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="AliExpress Clone" className="h-10" />
            <span className="text-xl font-bold text-red-600">AliExpress</span>
          </Link>
        </div>

        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search products, brands, and more..."
              className="w-full border py-2 px-4 rounded-l-lg focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded-r-lg hover:bg-red-700"
            >
              <FaSearch />
            </button>
          </form>
        </div>

        <div className="flex items-center space-x-6">
          <Link to="/wishlist" className="hidden md:block">
            <FaHeart className="text-xl" />
          </Link>
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-xl" />
            {product.length > 0 && (
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white w-5 h-5 flex justify-center items-center rounded-full">
                {product.length}
              </span>
            )}
          </Link>
          <button className="hidden md:block font-serif text-lg text-red-600" onClick={() => setIsModelOpen(true)}>
            {/* <FaUser className="text-xl" /> */}
            Sign/login
          </button>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="bg-gray-100 py-2 text-sm border-t">
        <div className="container mx-auto flex justify-start space-x-6">
          <button className="font-bold hover:text-red-600" onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}>
            Categories
          </button>
          <Link to="/" className="hover:text-red-600">Home</Link>
          <Link to="/shop" className="hover:text-red-600">Shops</Link>
          <Link to="/new-arrivals" className="hover:text-red-600">New Arrivals</Link>
          <Link to="/best-sellers" className="hover:text-red-600">Best Sellers</Link>
          
        </div>
      </div>

      {/* Categories Dropdown */}
      {isCategoriesOpen && (
        <div className="absolute bg-white shadow-md p-4 w-full z-10">
          <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/categories/electronics" className="hover:text-red-600">Electronics</Link>
            <Link to="/categories/fashion" className="hover:text-red-600">Fashion</Link>
            <Link to="/categories/home" className="hover:text-red-600">Home & Garden</Link>
            <Link to="/categories/beauty" className="hover:text-red-600">Beauty</Link>
            <Link to="/categories/toys" className="hover:text-red-600">Toys</Link>
            <Link to="/categories/automobiles" className="hover:text-red-600">Automobiles</Link>
            <Link to="/categories/sports" className="hover:text-red-600">Sports</Link>
            <Link to="/categories/jewelry" className="hover:text-red-600">Jewelry</Link>
          </div>
        </div>
      )}

      {/* Modal for login/register */}
      <Modal isModelOpen={isModelOpen} setisModelOpen={setIsModelOpen}>
        {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin} />}
      </Modal>
    </nav>
  );
}

export default Navbar;
