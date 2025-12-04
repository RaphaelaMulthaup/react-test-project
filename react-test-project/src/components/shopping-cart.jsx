import React, { Component } from "react";

class ShoppingCart extends Component {
  state = {
    items: [
      { name: "Tomaten", amount: 1, price: 2.5 },
      { name: "Äpfel", amount: 3, price: 3.5 },
    ],
  };
  render() {
    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>
        {this.state.items.map(item => <div key={item.name}>{item.amount}x {item.name} {item.price}€</div>)}
      </div>
    );
  }
}

export default ShoppingCart;
