import React from "react";
import { IconContext } from "react-icons";
import { Helmet } from "react-helmet";
import { Header } from "./Header";
import PropTypes from "prop-types";

export const Layout = (props) => {
  const { children, title, disableHeader } = props;

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{`${title} | Basics React Spring`}</title>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Helmet>
      <Header disableHeader={disableHeader} />
      {children}
    </IconContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};
