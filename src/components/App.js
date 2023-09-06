import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const products = [
  "tooth paste",
  "tooth brush",
  "mouth wash",
  "dental floss",
  "mouth guard",
];

const bikeProducts = ["bike rack", "mountain bike", "soccer ball", "treadmill"];

const App = () => {
  return (
    <div>
      <SearchBar products={products} />
      <SearchBar products={bikeProducts} />
    </div>
  );
};

export default App;
