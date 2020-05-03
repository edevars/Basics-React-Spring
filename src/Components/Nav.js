import React from "react";
import logo from "../Images/logo.png";

export const Nav = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo valing-wrapper">
          <img className="responsive-img" src={logo} alt="logo" />
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Examples</a>
          </li>
          <li>
            <a href="/">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
