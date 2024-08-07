import Logo from "../logo/Logo";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";



const Header = () => {
  return (
   
    <header className="h-24 shadow-lg bg-gray-100">
      <div className="container mx-auto h-full flex items-center px-4 justify-between">
        <div className="">
         <Link to={"/"}>
         <Logo w={300} h={100} />
         </Link>
        </div>
        <div className="flex items-center w-full max-w-md">
          <input
            type="text"
            placeholder="Search your product here..."
            className="w-full outline-none pl-4 py-2 border border-r-0 rounded-l-full"
          />
          <div className="text-lg h-10 bg-red-900 flex items-center justify-center rounded-r-full px-4 cursor-pointer">
            <GoSearch className="text-black" />
          </div>
        </div>
          {/* User icons and Cart */}
        <div className="flex items-center gap-8">
          <div className="text-3xl cursor-pointer text-black">
          <FaUser />
     

          </div>
          <div className="text-3xl relative">
            <span>  <FaShoppingCart className="text-black"/> </span>
            <div className="bg-red-600 text-blackw-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-2 ">
              <p className="text-xs">0</p>
            </div>

          </div>
          <div className="gap-4">
            <Link to={"/login"} className="px-3 py-2 bg-black text-white rounded-full hover:bg-red-700">Login</Link>
          </div>
          <div className="gap-4">
            <Link to={"/sign_up"} className="px-3 py-2 bg-black text-white rounded-full hover:bg-red-700">Signup</Link>
          </div>
        
         
        </div>
      </div>
    </header>
 
  );
};

export default Header;
