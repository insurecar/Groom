import React, { Component } from "react";

const NumbersList = ({ numb }) => {
  return (
    <ul>
      {numb.map((elem) => (
        <li key={Math.random()}>{elem}</li>
      ))}
    </ul>
  );
};

export default NumbersList;
