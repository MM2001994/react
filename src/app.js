import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
//import About from "./components/About";
// import Grocery from "./components/Grocery";



const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        // Making an API call then getting a value
        const data = {
            name: "Manish Mondal"
        };
        setUserName(data.name);
    }, []);

    return (
        <UserContext.Provider value={{loggedInUser : userName}}>
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-3 sm:px-4">
                <Header />
                <Outlet />
            </div>
        </div>
        </UserContext.Provider>
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
                element: <Suspense fallback = {<h1>Loading Our Owner Details!!!</h1>}><About /></Suspense>,
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