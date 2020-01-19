import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import ItemsServie from "../../services/ItemsService";

const featuredDesktops = ItemsServie.getItems().filter(
  item => item.featured === true && item.category === "desktop"
);

console.log(featuredDesktops);

const Desktops = () => {
  const products = featuredDesktops.map(item => (
    <ShopItem
      key={item.id}
      name={item.name}
      image={item.image}
      amount={item.amount}
    />
  ));

  return <div className="products">{products}</div>;
};

export default Desktops;
