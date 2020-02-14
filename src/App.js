import React, { Component} from "react";
import "./app.css";

class App extends Component{
  render(){
    return(
      <div className="app">
        <div className="product-header">
          <h1 className="product-title">Women’s tops</h1>
          <select className="product-filter">
            <option>Filter by size</option>
            <option>Size A</option>
            <option>Size B</option>
            <option>Size C</option>
          </select>
        </div>
        <div className="product-container">
          <ul>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 1</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 2</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 3</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 4</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 5</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 6</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 7</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
            <li>
              <div className="product-image">
                <div className="product-image">PRODUCT 8</div>
                <span className="product-name">PRODUCT NAME</span>
                <span className="product-price">$15</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;