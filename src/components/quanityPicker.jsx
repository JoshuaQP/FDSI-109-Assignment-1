import React, { Component } from "react";
import "./quanityPicker.css";

class QuantityPicker extends Component {
  state = {
    value: 1,
    name: "joshua",
  };
  render() {
    return (
      <div className="quantity-picker">
        {/* add functionality to button */}
        <button onClick={this.increase} className="btn green">
          +
        </button>
        <label className="value">{this.state.value}</label>
        <button
          disabled={this.state.value === 1}
          onClick={this.decrease}
          className="btn  red"
        >
          -
        </button>
      </div>
    );
  }
  //    hw javscript function vs arrow function
  increase = () => {
    let val = this.state.value + 1;
    // current = current +1 ;
    this.setState({ value: val });
    this.props.onValueChange(val);
  };

  decrease = () => {
    // current = current +1 ;
    let val = this.state.value - 1;

    if (val > 0) {
      this.setState({ value: val });
      this.props.onValueChange(val);
    }
  };
}

export default QuantityPicker;
