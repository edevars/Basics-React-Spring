import React from "react";
import { Header } from "./Header";
import { IconContext } from "react-icons";

export const App = () => {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Header />
    </IconContext.Provider>
  );
};
