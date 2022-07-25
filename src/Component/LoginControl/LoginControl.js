import React, { Component } from "react";
import Greeting from "./Greeting/Greeting";
import LoginBtn from './LoginBtn/LoginBtn';
import LogoutBtn from './LogoutBtn/LogoutBtn';


class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handlerLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handlerLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    let btn;

    if (isLoggedIn) {
      btn = <LogoutBtn onClick={this.handlerLogout} />;
    } else {
      btn = <LoginBtn onClick={this.handlerLogin} />;
    }
    return (
      <>
        <Greeting isLoggedIn={isLoggedIn} />
        {btn}
      </>
    );
  }
}

export default LoginControl;
