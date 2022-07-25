import React from "react";
import UserGreeting from "./UserGreeting/UserGreeting";
import GuestGreeting from './GuestGreeting/GuestGreeting';

const Greeting = (props) => {
  const { isLoggedIn } = props;

  return <>{isLoggedIn ? <UserGreeting /> : <GuestGreeting />}</>;
};

export default Greeting;
