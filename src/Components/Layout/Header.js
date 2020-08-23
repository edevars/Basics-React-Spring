import React from "react";
import { Nav } from "./Nav";
import { Banner } from "../Banner";

export const Header = ({ disableHeader }) => {
  return (
    <header>
      <Nav />
      {!disableHeader && <Banner />}
    </header>
  );
};
