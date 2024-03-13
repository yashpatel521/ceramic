import { Link } from "react-router-dom";
import React from "react";
import "../assets/css/navbar.css";
import { MdOutgoingMail } from "react-icons/md";
function Navbar() {
  return (
    <nav>
      <div className="nav-logo">
        <img
          src="/img/ceramicNobg.png"
          alt="Logo"
          srcSet="/img/ceramicNobg.png"
        />
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
        <input
          type="text"
          className="form-control"
          placeholder="Subscribe Us by Email"
          aria-label="Email"
          aria-describedby="email"
        />
        <div className="nav-searchicon">
          <MdOutgoingMail size={40} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
