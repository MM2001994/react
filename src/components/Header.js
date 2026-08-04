import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);


    return <div className="header">
        <div className="logo">
            <img src={LOGO_URL} className="logo-image" />
        </div>
        <div className="nav-icons">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/cart">Cart</Link></li>
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