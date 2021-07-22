import React, { Component } from "react";
import QuantityPicker from "./quanityPicker";
import "./item.css";
import storeContext from "../context/storeContext";

class Item extends Component {
  static contextType = storeContext;
  state = {
    quantity: 1,
  };
  render() {
    return (
      <div className="pc">
        <img src ={"/images/products/" + this.props.prod.image} alt="item" /> 
        <div className="text-bg">

        <h6>{this.props.prod.title}</h6>
        <p> {this.props.prod.description}</p>

        <label ClassName="total"> Tax: $12.93</label>

        <label ClassName="total"> Total: {this.props.prod.price}</label>
        <QuantityPicker onValueChange={this.handleAddButton}> </QuantityPicker>
      </div>
      </div>
    );
  }



handleAddButton = () => {
 var copy = {
   ...this.props.prod,
  quantity: this.setState.quantity 
};


  this.context.addProdtoCart(copy);
};

getTotal =() => {
  let total = this.props.prod.price * this.state.quantity;
  return total.toFixed(2)
};

handleQuantityChange = (quantity) => {
  console.log("Quantity changed", quantity);
  this.setstate({ quantity: quantity});
};
 
}



   export default Item;