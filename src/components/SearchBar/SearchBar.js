import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = (Props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClearClick = () => {
    setSearchValue("");
  };

  const displayClearButton = searchValue.length > 0;

  const filteredProducts = Props.products.filter((product) => {
    return product.includes(searchValue);
  });
  return (
    <div>
      <input
        type='text'
        value={searchValue}
        onChange={handleInputChange}
      ></input>
      {displayClearButton && <button onClick={handleClearClick}>clear</button>}

      <ul>
        {filteredProducts.map((product) => {
          return <li key={product}>{product}</li>;
        })}
      </ul>
    </div>
  );
};

SearchBar.defaultProps = {
  products: [],
};

export default SearchBar;
