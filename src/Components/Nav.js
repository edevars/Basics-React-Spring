import React from "react";
import logo from "../Images/logo.png";

export const Nav = () => {
  return (
    <nav className="container">
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          <img className="responsive-img" src={logo} alt="logo" />
        </a>

        <ul
          id="nav-mobile"
          className="right hide-on-med-and-down valign-wrapper"
        >
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Examples</a>
          </li>
          <li>
            <a href="/" className="btn">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
