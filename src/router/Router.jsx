import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../root/RootLayout";
import Home from "../components/home/Home";
import Login from "@/components/login/Login";
import SignUp from "@/components/signup/SignUp";



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
                path: "/login",
                element: <Login />,
            },
            {
                path: "/sign_up",
                element: <SignUp />,
            },
           
         
        ],
    },
]);

export default Router







