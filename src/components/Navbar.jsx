import { Link } from "react-router-dom";
import "../assets/css/navbar.css";
import { BiSolidPhoneCall } from "react-icons/bi";
function Navbar() {
  return (
    <nav>
      <div className="nav-backdrop">
        <div className="nav-logo">
          <img src="/img/logo.png" alt="Logo" srcSet="/img/logo.png" />
          <p>Ceramic & Tiles</p>
        </div>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
            <li>
              <Link to="/About">About Us</Link>
            </li>
          </ul>
        </div>
        <div className="nav-subscribeEmail">
          <div className="nav-searchicon mr-2">
            <span>+1 1800-065-521</span>
            <BiSolidPhoneCall size={25} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
