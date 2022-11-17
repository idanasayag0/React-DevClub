import React, { useState } from "react";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const navigate = useNavigate(); //access the useNavigate library
  const checkInput = () => {
    const name = document.getElementById("username").value;
    if (name.length > 0) {
      // send the name element
      props.setUN(name);
      // render to search page
      navigate("/Search");
    } else {
      alert("Please insert username"); // when the input is empty
    }
  };

  return (
    <div>
      <form>
        <input id="username" placeholder="enter username" />
        <button id="buttontype" onClick={checkInput}>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Home;
