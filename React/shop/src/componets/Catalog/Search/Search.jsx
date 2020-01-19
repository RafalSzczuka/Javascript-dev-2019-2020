import React from "react";
import Radio from "../../Radio/Radio";

const Search = props => {
  return (
    <div className="column-left">
      <div className="filter">
        <div className="filter-header">
          <h4>Search</h4>
          <span className="clear">Clear</span>
        </div>
        <div>
          <input type="text" placeholder="search..." />
        </div>
        <h4>Manufacturer</h4>
        <Radio id="all" value="all" for="All" />
        <Radio id="apple" value="apple" for="Apple" />
        <Radio id="dell" value="dell" for="Dell" />
      </div>
    </div>
  );
};

export default Search;
