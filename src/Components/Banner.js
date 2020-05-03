import React from "react";
import { useSpring, animated } from "react-spring";

export const Banner = () => {

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });
  
  return (
    <animated.div style={props}>
      <section className="header-main-container">
        <h1>Basics React Spring</h1>
        <h2>A variety of basic animations to have fun with React</h2>
      </section>
    </animated.div>
  );
};
