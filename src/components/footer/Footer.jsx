import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative bg-black py-8 text-white mt-24">
      <div className="container absolute top-0 h-1/3 bg-indigo-400 -translate-y-1/2 transform mx-auto sm:mx-10 md:mx-20 lg:mx-60">
        <div className="container mx-auto py-2 px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center h-full">
          <div className="text-center sm:text-left">
            <p className="text-lg sm:text-xl">Ready for Your next Shopping Destination.</p>
            <p className="text-md sm:text-lg text-black">Let's Get Started!</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Link to="/contact" className="text-lg sm:text-xl bg-gray-700 px-4 py-2 sm:px-5 sm:py-3">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 gap-8">
        <div className="container pt-8 sm:pt-12">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="w-full md:w-1/2">
              <p className="mt-4 text-center md:text-start text-2xl sm:text-3xl uppercase">Get in touch</p>
              <p className="mt-4 text-center md:text-start">
                Discover the best deals on your favorite products. Shop with confidence and enjoy fast, secure checkout and delivery. Join our community and stay updated with the latest trends and offers!
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <FaFacebook className="text-2xl sm:text-3xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl sm:text-3xl cursor-pointer hover:text-blue-700" />
                <FaTwitter className="text-2xl sm:text-3xl cursor-pointer hover:text-blue-400" />
                <FaInstagram className="text-2xl sm:text-3xl cursor-pointer hover:text-pink-500" />
              </div>
            </div> 
            <div className="w-full md:w-1/3 flex flex-col mt-8 md:mt-0 md:ml-28">
              <h2 className="text-lg sm:text-xl mb-2 mt-4 text-center md:text-left">Customer</h2>
              <div>
                <ul className="text-sm text-center md:text-left">
                  <li>
                    <Link to="/" className="text-white hover:text-gray-400">
                      Buyer
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-white hover:text-gray-400"
                    >
                      Supplier
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col mt-8 md:mt-0">
              <h2 className="text-lg sm:text-xl mb-2 mt-4 text-center md:text-left">Company</h2>
              <div>
                <ul className="text-sm text-center md:text-left">
                  <li>
                    <Link to="/" className="text-white hover:text-gray-400">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-white hover:text-gray-400"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex flex-col mt-8 md:mt-0">
              <h2 className="text-lg sm:text-xl mb-2 mt-4 text-center md:text-left">Further Information</h2>
              <div>
                <ul className="text-sm text-center md:text-left">
                  <li>
                    <Link to="/" className="text-white hover:text-gray-400">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="text-white hover:text-gray-400"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center mb-8 mt-8 md:mt-0">
              <div className="flex bg-gray-300 rounded-full overflow-hidden w-full max-w-xs p-2">
                <div className="bg-lime-900 text-white p-2 flex items-center justify-center rounded-full">
                  <FaEnvelope className="text-2xl" />
                </div>
                <div className="flex items-center justify-center w-full pr-8">
                  <p className="text-black">example@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
