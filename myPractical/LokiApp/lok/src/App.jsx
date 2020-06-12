import React from "react";
import { Component } from "react";

const baseUrl = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=5uTBUJbHvMOglR7RGbUBo3UADHtB8fdc`;

class App extends Component {
  state = {
    title: [],
    abstr: "",
  };

  componentDidMount() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          title: data.results,
        })
      );
  }

  article = (event) => {
    event.persist();
    console.log(event.target.innerText);
  };

  render() {
    console.log(this.state.title);
    return (
      <ul>
        {this.state.title.map((elem) => {
          return (
            <li
              key={elem.id}
              onClick={() => {
                this.setState({
                  abstr: elem.abstract,
                });
              }}
            >
              {elem.title}
              <p>{this.state.abstr}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default App;
