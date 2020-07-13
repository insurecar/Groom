import React, { Component } from "react";
import Car from "./Car";

class App extends Component {
  state = {
    cars: [
      { name: "Ford", year: 2018 },
      { name: "Audi", year: 2016 },
      { name: "Skoda", year: 2010 },
    ],
    pageTitle: "React components",
    showCars: false,
  };

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle,
    });
  };

  toggleCarsRender = () => {
    this.setState({
      showCars: !this.state.showCars,
    });
  };

  onChangeName(name, index) {
    const car = this.state.cars[index];
    car.name = name;
    const cars = [...this.state.cars];
    cars[index] = car;
    this.setState({
      cars,
    });
  }

  deleteHendler(index) {
    console.log(index);

    const cars = [...this.state.cars];
    cars.splice(index, 1);
    this.setState({
      cars,
    });
  }

  render() {
    const divStyle = {
      textAlign: "center",
    };

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsRender}>Toggle cars</button>

        {this.state.showCars
          ? this.state.cars.map((cars, index) => (
              <Car
                key={index}
                name={cars.name}
                year={cars.year}
                onDelete={this.deleteHendler.bind(this, index)}
                onChangeName={(event) =>
                  this.onChangeName(event.target.value, index)
                }
              />
            ))
          : null}
      </div>
    );
  }
}

export default App;
