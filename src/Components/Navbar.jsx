import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/navbar" className="navbar-brand">
        Yelloww Classes
      </Link>
      <div className="ml-auto">
        <ul className="navbar-nav">
          <li className="navbar-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/feed" className="nav-link">
              Feed
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/explore" className="nav-link">
              Explore
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
