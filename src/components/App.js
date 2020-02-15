import React, { Component} from "react";
import "../assets/styles/app.css";

import ProductHeader from "./ProductHeader.js";
import Products from "./Products";

function App() {
  return(
    <div className="app">
      <ProductHeader />
      <Products />
    </div>
  );
}

export default App;