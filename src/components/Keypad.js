import React from "react";
import "./calc/calc.scss";

export default class Keypad extends React.Component {
  onPressedHandler = (e) => {
    this.props.onPressedHandler(e.target.value);
  };
  render() {
    return (
      <div class="key-btn">
        <button value="1" onClick={this.onPressedHandler}>
          1
        </button>
        <button value="2" onClick={this.onPressedHandler}>
          2
        </button>
        <button value="3" onClick={this.onPressedHandler}>
          3
        </button>
        <button value="4" onClick={this.onPressedHandler}>
          4
        </button>
        <button value="5" onClick={this.onPressedHandler}>
          5
        </button>
        <button value="6" onClick={this.onPressedHandler}>
          6
        </button>
        <button value="7" onClick={this.onPressedHandler}>
          7
        </button>
        <button value="8" onClick={this.onPressedHandler}>
          8
        </button>
        <button value="9" onClick={this.onPressedHandler}>
          9
        </button>
        <button value="+" onClick={this.onPressedHandler}>
          +
        </button>
        <button value="-" onClick={this.onPressedHandler}>
          -
        </button>
        <button value="=" onClick={this.onPressedHandler}>
          =
        </button>
      </div>
    );
  }
}
