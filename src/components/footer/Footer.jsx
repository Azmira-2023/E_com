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
    <div className="relative bg-black py-12 text-white mt-24">
      <div className="container absolute top-0 h-1/4 bg-indigo-400 -translate-y-1/2 transform mx-60">
        <div className="container mx-auto py-2 px-12 flex justify-between items-center h-full">
          <div>
            <p className="text-xl">Ready for Your next Shopping Destination.</p>
            <p className="text-lg text-black">Let's Get Started!</p>
          </div>
          <div>
            <Link to="/contact" className="text-xl bg-gray-700 px-5 py-3">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="relative z-10 gap-8">
        <div className="container pt-4">
          <div className="flex justify-between">
            <div className="w-1/2">
              <p className="mt-4 text-start text-3xl uppercase">Get in touch</p>
              <p className="mt-4 text-start">
                Discover the best deals on your favorite products. Shop with
                confidence and enjoy fast, secure checkout and delivery. Join
                our community and stay updated with the latest trends and
                offers!
              </p>
              <div className="flex space-x-4 mt-6">
                <FaFacebook className="text-3xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-700" />
                <FaTwitter className="text-3xl cursor-pointer hover:text-blue-400" />
                <FaInstagram className="text-3xl cursor-pointer hover:text-pink-500" />
              </div>
            </div> 
            <div className="w-1/3 flex flex-col ml-28">
              <h2 className="text-xl mb-2 mt-4">Customer</h2>
              <div>
                <ul className="text-sm">
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
            <div className="w-1/3 flex flex-col">
              <h2 className="text-xl mb-2 mt-4">Company</h2>
              <div>
                <ul className="text-sm">
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
            <div className="w-1/3 flex flex-col">
              <h2 className="text-xl mb-2 mt-4">Further Information</h2>
              <div>
                <ul className="text-sm">
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

            <div className="w-1/2 flex items-center mb-8">
              <div className="flex bg-gray-300 rounded-full overflow-hidden w-full p-2">
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
