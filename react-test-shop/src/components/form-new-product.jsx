import React, { Component } from "react";

class FormNewProduct extends Component {
  state = {
    newProduct: {
      name: "",
      price: "",
      description: "",

    },
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newProduct: {
        ...prevState.newProduct,
        [name]: value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newProduct } = this.state;
    this.props.onSubmit(newProduct);
  };

  render() {
    const { name, price, description } = this.state.newProduct;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <span className="label">Produktname:</span>

          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            type="text"
            placeholder="z. B. Apfelsaft"
          />
        </label>

        <label>
          <span className="label"> Preis:</span>

          <input
            name="price"
            value={price}
            onChange={this.handleChange}
            type="number"
            placeholder="z. B. 3.99"
          />
        </label>

        <label>
          <span className="label">Beschreibung:</span>

          <input
            name="description"
            value={description}
            onChange={this.handleChange}
            type="text"
            placeholder="z. B. Frischer Bio-Apfelsaft"
          />
        </label>


        <button type="submit">Produkt hinzufügen</button>
      </form>
    );
  }
}

export default FormNewProduct;
