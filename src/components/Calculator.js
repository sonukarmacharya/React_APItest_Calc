import React, { Component } from "react";
import Output from "./Output";
import Keypad from "./Keypad";
import "./calc/calc.scss";

export default class Calculator extends Component {
  state = {
    result: "",
  };

  onPressedHandler = (buttonName) => {
    if (buttonName === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + buttonName,
      });
    }
  };

  calculate = () => {
    this.setState({
      result: eval(this.state.result),
    });
  };

  render() {
    return (
      <div className="main">
        <Output result={this.state.result} />
        <Keypad onPressedHandler={this.onPressedHandler} />
      </div>
    );
  }
}
