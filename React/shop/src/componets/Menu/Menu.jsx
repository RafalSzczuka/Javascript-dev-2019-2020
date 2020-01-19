import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
