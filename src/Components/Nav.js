import React from "react";
import { DiGithubAlt } from "react-icons/di";
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
          <li className="valign-wrapper">
            <a href="https://www.react-spring.io/" target="blank" className="btn">
              <DiGithubAlt style={{fontSize: "24px", marginRight: "12px"}}/>
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
