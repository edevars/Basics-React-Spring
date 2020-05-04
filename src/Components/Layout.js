import React from "react";
import { IconContext } from "react-icons";
import { Header } from "./Header";


export const Layout = (props) => {
  const { children } = props;

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Header />
      {children}
    </IconContext.Provider>
  );
};
