import React from "react";
import Desktops from "../Featured/Desktops";
import Tablets from "../Featured/Tablets";

const Home = () => {
  return (
    <div className="container">
      <h1 className="header-big">Welcome to our store</h1>
      <h2 className="header-small">Desktops</h2>
      <Desktops />
      <h2 className="header-small">Tablets</h2>
      <Tablets />
    </div>
  );
};

export default Home;
