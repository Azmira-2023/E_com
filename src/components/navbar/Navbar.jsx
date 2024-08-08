import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg text-xl">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center py-4">
          {/* Nav Links */}
          <div className="hidden md:flex space-x-28">
            <Link to="/" className="text-white hover:text-white">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-white">
              About
            </Link>
            <Link to="/products" className="text-white hover:text-white">
              Products
            </Link>
            <Link to="/shop" className="text-white hover:text-white">
              Shop
            </Link>
            <Link to="/contact" className="text-white hover:text-white">
              Contact
            </Link>
          </div>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleNavbar} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col items-center space-y-2 pb-4">
              <Link to="/" className="text-white hover:text-white">
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-white">
                About
              </Link>
              <Link to="/products" className="text-white hover:text-white">
                Products
              </Link>
              <Link to="/shop" className="text-white hover:text-white">
                Shop
              </Link>
              <Link to="/contact" className="text-white hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
