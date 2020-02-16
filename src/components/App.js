import React from "react";
import "../assets/styles/app.css";

import ProductHeader from "./ProductHeader.js";
import ProductList from "./ProductList";

function App() {
  return(
    <div className="app">
      <ProductHeader />
      <ProductList />
    </div>
  );
}

export default App;