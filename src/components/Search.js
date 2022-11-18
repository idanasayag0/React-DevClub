import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Home from "./Home";
import axios from 'axios' // api 
import { ClassNames } from "@emotion/react";
import "./Search.css"

const Search = (props) => {
  const [data,setData] = useState([])
  useEffect(() =>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then(res => {
      console.log("Getting data::::", res.data.items);
      setData(res.data.items)
    })
    .catch(err => console.log(err))
  },[])

  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <h1 className="header-test">Welcome {props.UN}</h1>
      <input className="Search-input" type="text" value={searchValue} onChange={handleInputChange} placeholder="Search Books.." />
      <ul className="list-group list-group-flush">
      {data.map((d) => {
        if(d.volumeInfo.title.includes(searchValue)){
          return(
        <li className="list-group-item" key={d.volumeInfo.title}> 
        {d?.volumeInfo?.imageLinks?.smallThumbnail && <img src={d?.volumeInfo.imageLinks.smallThumbnail} alt="book"/>}
        <span className="list-text">{d.volumeInfo.title}</span>
        </li>
        )
        }
      })}
      </ul>
    </div>
  );
  
};
export default Search;