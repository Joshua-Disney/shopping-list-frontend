import React from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import { getAccount, getThing, logout } from "../store/actions";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      account: {}
    };
  }

  componentDidMount() {
    this.props.getAccount(this.props.account_id);
    console.log("this.state: ", this.state);
  }

  componentDidUpdate() {
    this.setState({ ...this.state, account: this.props.accout });
    console.log("this.state: ", this.state);
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Code me, Papi!</h1>
          <p>This should say the word thing: {this.props.thing}</p>
          <div>
            <h2>Logged the fuck in my dude!</h2>
            <button
              onClick={event => {
                event.preventDefault();
                this.props.logout();
              }}
            >
              Log out
            </button>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ accountReducer, loginReducer, thingReducer }) => {
  return {
    account: accountReducer.accout,
    account_id: loginReducer.account_id,
    isLoggedIn: loginReducer.isLoggedIn,
    thing: thingReducer.thing
  };
};

const mapDispatchToProps = { getAccount, getThing, logout };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
