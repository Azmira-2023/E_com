import React, { useState } from "react";
import signin from "../../assets/signin.png";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();

  const { loginUser, googleSignIn } = useContext(AuthContext);
 // Handle email and password login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    loginUser(email, password).then((result) => {
      if (result) {
        console.log(result.user);
        toast.success("login successful!");
        navigate('/');
      }
    });
   
  };
  //const handle googlesignin
  const handleGoogleSignIn =() => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      const currentUser ={
        email: user.email
      }
      console.log(currentUser);
   
    })

  }
  

  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container max-w-lg p-4">
        <div className="bg-gray-100 shadow-md p-6 rounded-lg">
          <div className="w-20 h-20 mx-auto mb-4">
            <img src={signin} alt="Sign In" className="rounded-full" />
          </div>
          <h2 className="text-center text-2xl font-bold mb-6">Login</h2>
          <form className="space-y-4 " onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <span
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer mt-6"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" />
                ) : (
                  <FaEye className="h-5 w-5" />
                )}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <hr className="w-full border-black" />
            <span className="px-2 text-sm text-black">or</span>
            <hr className="w-full border-black" />
          </div>
          <div className="mt-6">
            <button  onClick={handleGoogleSignIn} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Login with Google
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign_up"
                className="text-indigo-600 hover:text-indigo-500 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
