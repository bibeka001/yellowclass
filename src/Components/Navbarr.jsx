import React from "react";
import { Link } from "react-router-dom";
const Navbarr = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/navbarr" className="navbar-brand">
          Yellowww
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feed" className="nav-link">
                Feed
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/explore" className="nav-link">
                Explore
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbarr;
