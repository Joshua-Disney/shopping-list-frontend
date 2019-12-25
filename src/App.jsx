import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Private from "./components/Helpers/privateRoute";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("isLoggedIn: ", this.props.isLoggedIn);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Private exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
          </Switch>
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
