import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return <div className="header">
        <div className="logo">
            <img src={LOGO_URL} className="logo-image" />
        </div>
        <div className="nav-icons">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={() => {
                    setIsLoggedIn(!isLoggedIn);
                }}>
                    {isLoggedIn ? "Logout" : "Login"}
                </button>
            </ul>
        </div>
    </div>
}

export default Header;