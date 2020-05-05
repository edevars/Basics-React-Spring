import React from "react";
import { Layout } from "../Components/Layout";
import { Card } from "../Components/Card";

const Home = () => (
  <Layout title="Home">
    <main className="container">
      <section className="section">
        <h3>Springs</h3>
        <div className="row">
          <Card
            title="useSpring"
            image="https://i.imgur.com/KIxbSXH.png"
            description="A single spring, moves data from a -> b"
          />
          <Card
            title="useSprings"
            image="https://i.imgur.com/Zq6rIpX.png"
            description="Multiple springs, for lists, where each spring moves data from a -> b"
          />
          <Card
            title="useTrail"
            image="https://i.imgur.com/53RCiCg.png"
            description="Multiple springs with a single dataset, one spring follows or trails behind the other"
          />
          <Card
            title="useTransition"
            image="https://i.imgur.com/sEpF3Fj.png"
            description="For mount/unmount transitions (lists where items are added/removed/updated)"
          />
          <Card
            title="useChain"
            image="https://i.imgur.com/RjrVQCG.png"
            description="To queue or chain multiple animations together"
          />
        </div>
      </section>
    </main>
  </Layout>
);
export default Home;
