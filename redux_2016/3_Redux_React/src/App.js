import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  render() {
    console.log(this.props.testStore);

    return (
      <div>
        <input type="text" className="trackInput" />
        <button className="addTrack">AddTrack</button>
        <ul className="list">
          {this.props.testStore.map((elem) => (
            <li key={Math.random()}>{elem}</li>
          ))}
        </ul>
        <div id="root"></div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    testStore: state,
  }),
  (dispatch) => ({})
)(App);
