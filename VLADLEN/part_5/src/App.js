import React, { Component, createContext } from "react";
import "./App.scss";
import Car from "./Car/Car";
// import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

export const ClickedContext = createContext(false);

class App extends Component {
  constructor(props) {
    // console.log("==> constructor");

    super(props);
    this.state = {
      clicked: false,
      cars: [
        { name: "Ford", year: 2018 },
        { name: "Audi", year: 2016 },
        { name: "Mazda", year: 2010 },
      ],
      pageTitle: "React components",
      showCars: false,
    };
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({ cars });
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat();
    cars.splice(index, 1);

    this.setState({ cars });
  }

  componentWillMount() {
    //положити HTML в DOM дерево
    // console.log("==> componentWillMount");
  }

  componentDidMount() {
    // HTML весь готовий і можна запихати дані
    // console.log("==> componentDidMount");
  }

  render() {
    // console.log("==>render");

    const divStyle = {
      textAlign: "center",
    };

    let cars = null;

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          // <ErrorBoundary >
          <Car
            index={index}
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={(event) =>
              this.onChangeName(event.target.value, index)
            }
          />
          // </ErrorBoundary>
        );
      });
    }

    return (
      <div style={divStyle}>
        {/*<h1>{this.state.pageTitle}</h1>*/}
        <h1>{this.props.title}</h1>

        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <hr />
        <button
          className={"AppButton"}
          onClick={this.toggleCarsHandler}
          style={{ marginTop: "20px" }}
        >
          Toggle cars
        </button>

        <button
          onClick={() =>
            this.setState({
              clicked: true,
            })
          }
        >
          Change clicked
        </button>

        <div
          style={{
            width: 400,
            margin: "auto",
            paddingTop: "20px",
          }}
        >
          {cars}
        </div>
      </div>
    );
  }
}

export default App;
