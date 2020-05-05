import React from "react";
import { DiGithubAlt } from "react-icons/di";

export const Nav = () => {
  return (
    <>
      <nav className="container">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <img
              className="responsive-img"
              src="https://i.imgur.com/153YmwC.png"
              alt="logo"
            />
          </a>
          <a data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons" style={{ fontSize: 40 }}>
              menu
            </i>
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
              <a
                href="https://www.react-spring.io/"
                target="blank"
                className="btn"
              >
                <DiGithubAlt
                  style={{ fontSize: "24px", marginRight: "12px" }}
                />
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="/">Sass</a>
        </li>
        <li>
          <a href="/">Components</a>
        </li>
        <li>
          <a href="/">JavaScript</a>
        </li>
      </ul>
    </>
  );
};
