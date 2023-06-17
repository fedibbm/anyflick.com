import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { BrowserRouter as Router,Link } from "react-router-dom";

const Navbar = () => (
  <div className="Navbar">
    <div className="nav-container">
      {/* Logo */}
      <Link to="/">
        <h1 className="Logo">AnyFlick.com</h1>
      </Link>
      {/* search bar */}
      <form className="search-bar">
        <input type="text" />
        <button>Search</button>
      </form>
      {/* navigation buttons */}
      <ul className="nav-buttons">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="Popular">Popular</Link>
        </li>
        <li>
          <Link to="/home">Movies</Link>
        </li>
        <li>
          <Link to="/home">Shows</Link>
        </li>
      </ul>
    </div>
  </div>
);

Navbar.propTypes = {};

Navbar.defaultProps = {};

export default Navbar;
