import React from "react";
import { connect } from "react-redux";
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
          {this.props.isLoggedIn ? <Home /> : <LoginForm />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ loginReducer }) => {
  return {
    isLoggedIn: loginReducer.isLoggedIn
  };
};

export default connect(mapStateToProps, {})(App);
