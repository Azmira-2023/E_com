import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../components/home/Home";
import Login from "@/components/login/Login";
import SignUp from "@/components/signup/SignUp";
import AboutUs from "@/components/aboutus/AboutUs";
import Contact from "@/components/contact/Contact";
import FastDelivery from "@/components/company/FastDelivery";
import SuperDeals from "@/components/company/SuperDeals";
import Reward from "@/components/company/Reward";
import Product from "@/components/product/Product";
import Shop from "@/components/shop/Shop";
import ProductDetails from "@/components/shop/ProductDetails";
import SearchResult from "@/components/searchresult/SearchResult";
// import CartPage from "@/components/cart/CartPage";





const Router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/fast-delivery",
                element: <FastDelivery />,
            },
            {
                path: "/super-deals",
                element: <SuperDeals/>,
            },
            {
                path: "/rewards",
                element: <Reward />,
            },
            {
                path: "/products",
                element: <Product />,
            },
            {
                path: "/product/:id",
                element: <ProductDetails />,
            },
            {
                path: "/search",
                element: <SearchResult />,
            },
            
            {
                path: "/shop",
                element: <Shop />,
            },
           
            {
                path: "/login",
                element: <Login />,
            },
           
            {
                path: "/sign_up",
                element: <SignUp />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
           
         
        ],
    },
]);

export default Router







