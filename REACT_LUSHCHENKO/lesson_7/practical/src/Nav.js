import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          {Object.keys(this.props.vasia).map((elem) => (
            <li>
              <a href="{nav[elem]}">{elem}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Nav;
