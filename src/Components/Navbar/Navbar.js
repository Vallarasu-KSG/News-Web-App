import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link className="logo" to="/">
          NewsWeb
        </Link>

        <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li onClick={() => setCategory("technology")}>
            Technology
          </li>

          <li onClick={() => setCategory("business")}>
            Business
          </li>

          <li onClick={() => setCategory("health")}>
            Health
          </li>

          <li onClick={() => setCategory("sports")}>
            Sports
          </li>

          <li onClick={() => setCategory("entertainment")}>
            Entertainment
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;