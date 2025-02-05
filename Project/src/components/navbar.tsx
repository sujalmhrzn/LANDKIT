import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        Landkit.
      </Link>
      <ul className="nav-links">
        <li>
          <a href="#">Landings</a>
        </li>
        <li>
          <a href="#">Pages</a>
        </li>
        <li>
          <a href="#">Account</a>
        </li>
        <li>
          <a href="#">Documentation</a>
        </li>
      </ul>
      <Link to="/buy" className="buy-btn">
        Buy now
      </Link>
    </nav>
  );
};

export default Navbar;
