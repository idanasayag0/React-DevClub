import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Home from "./Home";

const products = ["iron Man", "caption", "test", "test2"];

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredProducts = products.filter((product) => {
    return product.includes(searchValue);
  });
  return (
    <div>
      <h1>Wellcome {props.UN}</h1>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <ul>
        {filteredProducts.map((product) => {
          return <li>{product}</li>;
        })}
      </ul>
    </div>
  );
};

export default Search;
