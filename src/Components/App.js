import React from "react";
import { Header } from "./Header";
import { IconContext } from "react-icons";
import {HomePage} from "./HomePage";


export const App = () => {
  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Header />
      <HomePage />
    </IconContext.Provider>
  );
};
