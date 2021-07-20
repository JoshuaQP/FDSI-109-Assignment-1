import React, { Component } from "react";
import QuantityPicker from "./quanityPicker";
import "./item.css";
import storeContext from "../context/storeContext";


class Item extends Component {
  static contextType = storeContext;
  state = {
    quantity: 1 ,
  };
  render() {
    return (
      <div className="pc">
        <img src ={"/images/products/" + this.props.prod.image} alt="item" /> 
        <div className="text-bg">

        <h6>{this.props.prod.title}</h6>

        <p>  {this.props.prod.description}  </p>

        <label className="total">Total:${this.getTotal()} </label>

        <label className="total">Price:${this.props.prod.price.toFixed(2)}</label>

  

        <div className=  "item-controls">
        <QuantityPicker  onValueChange= {this.handleQuantityChange}></QuantityPicker>

        </div>
      </div>
      </div>
    );
  }


  getTotal =() => {
    let total =  this.props.prod.price * this.state.quantity;
    return total.toFixed(2);
  };
  handleQuantityChange =(quantity) => {
    console.log("Quanity changed", quantity);
    this.setState({quantity : quantity});
  };
}

export default Item;
