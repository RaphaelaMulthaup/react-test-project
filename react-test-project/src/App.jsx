import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-container">
          <div className="product-container">
            <Product title="Tomaten" description="Text über Tomaten" />{" "}
            <Product title="Gurken" description="Text über Gurken" />{" "}
            <Product title="Karotten" description="Text über Karotten" />{" "}
            <Product title="Paprika" description="Text über Paprika" />
          </div>
          <ShoppingCart />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
