import React from "react";

const ShopItem = props => {
  return (
    <div className="product">
      <img src={props.image} alt={props.name} />
      <p className="price">${props.amount}</p>
      <h3>{props.name}</h3>
    </div>
  );
};

export default ShopItem;
