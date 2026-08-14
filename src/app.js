import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Grocery from "./components/Grocery";



const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
                <Header />
                <Outlet />
            </div>
        </div>
    );
}
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading your very own grocery store!!!</h1>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);