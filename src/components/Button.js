import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import History from "./History";
import Detail from "./Detail";
import Calculator from "./Calculator";

class Button extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/calc">
            {" "}
            <input type="button" value="Calculator" />
          </Link>
          <Link to="/his">
            {" "}
            <input type="button" value="History" />
          </Link>
          <Link to="/det">
            {" "}
            <input type="button" value="Detail" />
          </Link>

          <Switch>
            <Route path="/calc">
              <Calculator />
            </Route>
            <Route path="/his">
              {" "}
              <History />
            </Route>
            <Route path="/det">
              {" "}
              <Detail />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default Button;
