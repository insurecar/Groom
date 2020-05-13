import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { value } = this.props;
    return <li>{value}</li>;
  }
}

export default ListItem;
