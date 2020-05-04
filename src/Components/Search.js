import React from "react";
import { GoSearch } from "react-icons/go";

export const Search = () => {
  return (
    <div className="row search-box">
      <div className="col m7 input-field input-container">
        <GoSearch className="search-icon" />
        <input type="text" id="search" placeholder="Search an example" />
      </div>
    </div>
  );
};
