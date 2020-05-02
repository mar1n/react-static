import React from "react";
import { NavLink } from 'react-router-dom'
const Header = ({ title }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <span className="navbar-brand">{title}</span>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link" exact={true} activeClassName="active">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/projects" className="nav-link" activeClassName="active">Projects</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
