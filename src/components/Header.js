import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
            </ul>
        </div>
    </div>
}

export default Header;