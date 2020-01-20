import React, { useState, useEffect } from "react";
import ShopItem from "../../ShopItem/ShopItem";
import ItemsServie from "../../../services/ItemsService";
import Radio from "../../Radio/Radio";

const list = ItemsServie.getItems();

const ProductList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const textChangeHandler = event => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    const results = list.filter(
      item =>
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.manufacture.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  }, [searchText]);

  const products = searchResults.map(product => (
    <ShopItem
      key={product.id}
      name={product.name}
      image={product.image}
      amount={product.amount}
    />
  ));

  return (
    <div className="catalog">
      <div className="column-left">
        <div className="filter">
          <div className="filter-header">
            <h4>Search</h4>
            <span className="clear" onClick={() => setSearchText("")}>
              Clear
            </span>
          </div>

          <div>
            <input
              type="text"
              placeholder="search..."
              value={searchText}
              onChange={textChangeHandler}
            />
          </div>

          <h4>Manufacturer</h4>
          <Radio id="all" value="all" label="All" name="manufacturer" />
          <Radio id="apple" value="apple" label="Apple" name="manufacturer" />
          <Radio id="dell" value="dell" label="Dell" name="manufacturer" />
        </div>
      </div>
      <div className="column-right">
        <div className="products">{products}</div>
      </div>
    </div>
  );
};

export default ProductList;
