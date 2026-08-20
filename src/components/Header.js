import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);

    return (
        <div className="flex flex-col gap-3 bg-red-200 m-2 rounded-lg shadow-md shadow-red-200/50 px-4 py-3 sm:flex-row sm:justify-between sm:items-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center overflow-hidden rounded-full bg-white/30 shadow-sm mx-auto sm:mx-0">
                <img src={LOGO_URL} className="w-full h-full object-cover" alt="logo" />
            </div>

            <div className="flex items-center justify-center sm:justify-end">
                <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-0">
                    <li className="p-2 text-sm sm:p-4 sm:text-base">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>

                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <Link to="/" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            Home
                        </Link>
                    </li>

                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <Link to="/about" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            About Us
                        </Link>
                    </li>

                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <Link to="/contact" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            Contact Us
                        </Link>
                    </li>

                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <Link to="/grocery" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            Grocery Store
                        </Link>
                    </li>

                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <Link to="/cart" className="relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-0 after:bg-red-600 after:transition-transform after:duration-200 hover:after:scale-x-100">
                            Cart
                        </Link>
                    </li>

                    <button
                        className="p-2 m-1 cursor-pointer bg-red-300 rounded-lg hover:bg-red-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                        onClick={() => {
                            setIsLoggedIn(!isLoggedIn);
                        }}
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                    <li className="p-2 sm:p-4 transition-all duration-200 hover:text-red-600 hover:font-semibold">
                        <p>{loggedInUser}</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;