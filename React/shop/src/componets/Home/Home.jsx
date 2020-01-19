import React from "react";
import ItemList from "../ItemList/ItemList";

const Home = () => {
  return (
    <div className="container">
      <h1 className="header-big">Welcome to our store</h1>
      <h2 className="header-small">Desktops</h2>
      <ItemList />
    </div>
  );
};

export default Home;
