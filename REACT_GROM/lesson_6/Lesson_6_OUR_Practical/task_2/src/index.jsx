import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Mailbox from "./Mailbox";

const baseURL =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

const messageNumber = (url) => {
  return fetch(url).then((response) => response.json());
};

const obj = messageNumber(baseURL);

obj.then((data) => data.length);

const rootElement = document.querySelector("#root");

ReactDOM.render(<Mailbox message={[]} />, rootElement);
