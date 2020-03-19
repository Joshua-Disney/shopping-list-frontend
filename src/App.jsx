import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Private from "./components/Helpers/privateRoute";
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import ProfileForm from "./components/Profiles/profileForm";
import NeedForm from "./components/Needs/needForm";
import WantForm from "./components/Wants/wantForm";

import "./less/index.less";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("isLoggedIn: ", this.props.isLoggedIn);
  }

  componentDidUpdate() {
    console.log("Updated isLoggedIn: ", this.props.isLoggedIn);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Private exact path="/" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Private path="/add-profile" component={ProfileForm} />
            <Private path="/add-need" component={NeedForm} />
            <Private path="/add-want" component={WantForm} />
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
