import React from "react";
import Search from "./Search/Search";
import ProductList from "./ProductList/ProductList";

const Catalog = () => {
  return (
    <div className="container">
      <h1 className="header-big">Catalog</h1>
      <div className="catalog">
        <Search />
        <ProductList />
      </div>
    </div>
  );
};

export default Catalog;
