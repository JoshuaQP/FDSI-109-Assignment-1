import React, { Component } from "react";
import storeContext from "../context/storeContext";

class ShoppingList extends Component {
  static contextType = storeContext;
  state = {};
  render() {
    return (
      <div className="shopping-list">
        <div className="capture">
          <input type="text" />
          <button>Add to list</button>
        </div>
      </div>
    );
  }

  handleAddToList = () => {
    this.context.addToShoppingList("The text from the input here");
  };

  // handleInputChange = (event) => {

  //     this.setState({ [event.target.name]: event.target.value});
  // };

  // handleSave =() => {
  //     console.log("saving products");
  //     console.log({...this.state});
  // };

  // storeShoppingList = () =>{

  // }
}
export default ShoppingList;
