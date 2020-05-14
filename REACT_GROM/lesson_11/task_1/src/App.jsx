import React from "react";
import Numbers from "./Numbers";
import EvenNumbers from "./EvenNumbers";
import OddNumbers from "./OddNumbers";

class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { number } = this.state;
    return (
      <div className="app">
        <OddNumbers title="Odd numbers" number={number} />
        <EvenNumbers title="Event numbers" number={number} />
        <Numbers title="All numbers" number={number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default App;
