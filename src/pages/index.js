import React from "react";
import { Layout } from "../Components/Layout";
import { Search } from "../Components/Search";
import { Card } from "../Components/Card";

const Home = () => (
  <Layout title="Home">
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
  </Layout>
);
export default Home;
