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
    <div className="Auth-form-container">
    <form className="Auth-form">
      <div className="Auth-form-content">
        <h1 className="Auth-form-title">Sign In</h1>
        <div className="form-group mt-3">
          <label>UserName</label>
          <input id="username"
            type="name"
            className="form-control mt-1"
            placeholder="Enter username"
          />
          <button className="btn btn-lg btn-dark" id="buttontype" onClick={checkInput}>
          Sign in
        </button>
        </div>
      </div>
    </form>
  </div>
  );
};

export default Home;