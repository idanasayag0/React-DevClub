import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./App.css";

import Home from "./components/Home";
import Search from "./components/Search";
import WishList from "./components/WishList";

function App() {
  const [userName, setUserName] = useState("");

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/search" element={<Search UN={userName} />}></Route>
          <Route path="/wishlist" element={<WishList />}></Route>
          <Route path="/" element={<Home setUN={setUserName} />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
