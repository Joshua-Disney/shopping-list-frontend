import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/Login/LoginForm";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
