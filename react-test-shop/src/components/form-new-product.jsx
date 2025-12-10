import React, { Component } from "react";

class FormNewProduct extends Component {
  state = {
    name: "",
    price: "",
    description: "",
    imageUrl: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, price, description, imageUrl } = this.state;
    return (
      <form>
        <input
          name="name"
          value={name}
          onChange={this.handleChange}
          type="text"
        />

        <input
          name="price"
          value={price}
          onChange={this.handleChange}
          type="number"
        />

        <input
          name="description"
          value={description}
          onChange={this.handleChange}
          type="text"
        />

        <input
          name="imageUrl"
          value={imageUrl}
          onChange={this.handleChange}
          type="text"
        />
      </form>
    );
  }
}

export default FormNewProduct;
