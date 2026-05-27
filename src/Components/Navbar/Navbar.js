import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ setCategory }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    setCategory(category);

    // mobile/tablet la click panna menu close aagum
    setMenuOpen(false);
  };

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

          <li onClick={() => handleCategoryClick("technology")}>
            Technology
          </li>

          <li onClick={() => handleCategoryClick("business")}>
            Business
          </li>

          <li onClick={() => handleCategoryClick("health")}>
            Health
          </li>

          <li onClick={() => handleCategoryClick("sports")}>
            Sports
          </li>

          <li onClick={() => handleCategoryClick("entertainment")}>
            Entertainment
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;