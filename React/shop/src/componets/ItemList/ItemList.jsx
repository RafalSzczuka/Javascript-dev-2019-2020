import React from "react";
import ShopItem from "../ShopItem/ShopItem";
import ItemsServie from "../../services/ItemsService";

const items = ItemsServie.getItems();

console.log(items);

const ItemList = () => {
  const mapped = items.map(item => (
    <ShopItem
      key={item.id}
      name={item.name}
      image={item.image}
      amount={item.amount}
    />
  ));

  return <div className="products">{mapped}</div>;
};

export default ItemList;
