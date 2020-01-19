import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import ItemsServie from "../../services/ItemsService";

const featuredTablets = ItemsServie.getItems().filter(
  item => item.featured === true && item.category === "tablet"
);

console.log(featuredTablets);

const Tablets = () => {
  const products = featuredTablets.map(item => (
    <ShopItem
      key={item.id}
      name={item.name}
      image={item.image}
      amount={item.amount}
    />
  ));

  return <div className="products">{products}</div>;
};

export default Tablets;
