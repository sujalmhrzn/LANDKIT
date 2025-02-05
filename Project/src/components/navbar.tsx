import React from 'react'

const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Landkit.
      </a>
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
      <a href="#" className="buy-btn">
        Buy now
      </a>
    </nav>
  );
};

export default Navbar
