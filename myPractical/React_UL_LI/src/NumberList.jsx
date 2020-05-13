import React, { Component } from "react";
import ListItem from "./ListItem";

class NumberList extends Component {
  render() {
    const num = this.props.numbers;
    const listItems = num.map((number) => (
      <ListItem key={number.toString()} value={number} />
    ));

    return <ul>{listItems}</ul>;
  }
}

export default NumberList;
