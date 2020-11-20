import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./actions";
import axios from "axios";

const Connected = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  console.log(data);
  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((json) => dispatch(getData(json)));
  };

  return <button onClick={onClick}>Click me</button>;
};

export default Connected;
