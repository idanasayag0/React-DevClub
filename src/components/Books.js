import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { json } from "react-router-dom";
import Home from "./Home";
import axios from 'axios' // api 

const Books = ()=>{
    const [bookTitle,setBookTitle] = useState([])
    const [bookImg,setBookImg] = useState([])
    const getBook = () =>{
      axios.get('https://www.googleapis.com/books/v1/volumes?q=search+terms')
      .then(res => {
        console.log(res.data.items[9].volumeInfo.imageLinks.smallThumbnail); // image
        console.log(res.data.items[9].volumeInfo.title); // title
        setBookTitle(res.data.items[9].volumeInfo.title)
        setBookImg(res.data.items[9].volumeInfo.imageLinks.smallThumbnail)
      }).catch(err => {
        console.log(err);
      })
    }
}

export default Books