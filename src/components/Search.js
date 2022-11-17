import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Home from "./Home";
import axios from 'axios' // api 
import "./Home.css"

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


  const products = ["iron Man", "caption", "test", "test2"];
  const filteredProducts = products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <h1>Wellcome {props.UN}</h1>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <ul class="list-group list-group-flush">
      {data.map(d => {
        return(
        <li class="list-group-item" key={d.volumeInfo.title}> 
        {d?.volumeInfo?.imageLinks?.smallThumbnail && <img src={d?.volumeInfo.imageLinks.smallThumbnail} alt="book"/>}
        <span class="list-text">{d.volumeInfo.title}</span>
        </li>
        )
      })}
      </ul>
      <div>
      <h1>This is the Func input</h1>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <ul>
        {filteredProducts.map((product) => {
          return <li>{product}</li>;
        })}
      </ul>
      </div>
    </div>
  );
  
};
export default Search;


/*
  const [bookTitle,setBookTitle] = useState([])
  const [bookImg,setBookImg] = useState([])
  const getBook = () =>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then(res => {
      // res.data = all the arr in the api
      console.log(res.data.items[9].volumeInfo.imageLinks.smallThumbnail); // image
      console.log(res.data.items[9].volumeInfo.title); // title
      setBookTitle(res.data.items[9].volumeInfo.title)
      setBookImg(res.data.items[9].volumeInfo.imageLinks.smallThumbnail)
    }).catch(err => {
      console.log(err);
    })
  }

  const [searchValue, setSearchValue] = useState("");
  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const products = ["iron Man", "caption", "test", "test2"];
  const filteredProducts = products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <h1>Wellcome {props.UN}</h1>
      <button onClick={getBook}>test</button>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      <ul>
        <li>{bookTitle && <p>{bookTitle}</p>} {bookImg && <img src={bookImg} alt="Logo" />}</li>
      </ul>
      <ul>
        {filteredProducts.map((product) => {
          return <li>{product}</li>;
        })}
      </ul>
    </div>
  );
*/


/*

const [data,setData] = useState([])
  useEffect(() =>{
    axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
    .then(res => {
      console.log("Getting data::::", res.data);
      setData(res.data)
    })
    .catch(err => console.log(err))
  },[])

*/