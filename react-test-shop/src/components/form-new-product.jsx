import React, { Component } from "react";

class FormNewProduct extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  };
  setValue = (key, value) => {
    this.setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };
  render() {
    const { name, price, description, imageUrl } = this.state;
    return (
    <form action="">
      <input
        value={name}
        onChange={(e) => this.setValue("name", e.target.value)}
        type="text"
      />
      <input
        value={price}
        onChange={(e) => this.setValue("price", e.target.value)}
        type="number"
      />

      <input
        value={description}
        onChange={(e) => this.setValue("description", e.target.value)}
        type="text"
      />

      <input
        value={imageUrl}
        onChange={(e) => this.setValue("imageUrl", e.target.value)}
        type="text"
      />
    </form>);
  }
}

export default FormNewProduct;
