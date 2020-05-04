import React from "react";
import { Search } from "./Search";
import { Card } from "./Card";

export const HomePage = () => {
  return (
    <main className="container">
      <section className="section">
        <Search />
      </section>
      <h3 className="example-title">Examples</h3>
      <div className="divider" />
      <section className="section">
        <div className="row">
          <div className="col s12 m6 l4">
            <Card />
          </div>
          <div className="col s12 m6 l4">
            <Card />
          </div>
          <div className="col s12 m6 l4">
            <Card />
          </div>
        </div>
      </section>
    </main>
  );
};
