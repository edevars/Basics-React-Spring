import React from "react";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header>
      <Nav />
      <section className="header-main-container valign-wrapper">
          <h1>Basics React Spring</h1>
      </section>
    </header>
  );
};
