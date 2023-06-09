import React from "react";

import { Link } from "react-router-dom";

import "./navbar.css"
import logo from '../../assets/images/logo.jpeg';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            height={53}
            src={logo}
            alt="logo"
          />
        </div>

        <ul className="nav-list">
          <li className="nav-list-item">
            <Link className="navlink" to={'/'}>Home</Link>
          </li>

          <li className="nav-list-item">
            <Link className="navlink" to={'/info'}>Info</Link>
          </li>

          <li className="nav-list-item">
            <Link className="navlink" to={'/about'}>About Us</Link>
          </li>

          <li className="nav-list-item">
            <Link className="navlink" to={'/contact'}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;