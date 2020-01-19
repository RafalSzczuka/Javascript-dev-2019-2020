import React from "react";
import ShopItem from "../../ShopItem/ShopItem";
import ItemsServie from "../../../services/ItemsService";

const list = ItemsServie.getItems();

const ProductList = props => {
  const products = list.map(product => (
    <ShopItem
      key={product.id}
      name={product.name}
      image={product.image}
      amount={product.amount}
    />
  ));

  return (
    <div className="column-right">
      <div className="products">{products}</div>
    </div>
  );
};

export default ProductList;
