import React from "react";
import UserGreeting from "./UserGreeting";
import GuestGreeting from "./GuestGreeting";

const Greeting = ({ isLog }) => (isLog ? <UserGreeting /> : <GuestGreeting />);

export default Greeting;
