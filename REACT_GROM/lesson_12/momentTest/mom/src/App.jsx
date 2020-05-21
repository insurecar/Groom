import React from "react";
//import moment from "moment";
import moment from "moment";
import "moment/locale/uk";
import { Component } from "react";
const dayTo = new Date(2020, 5, 20);
const dayFrom = new Date(2019, 9, 27);
const day = (dayTo - dayFrom) / (60 * 60 * 24 * 1000);

class App extends Component {
  state = {
    today: "",
  };

  //   componentDidMount() {
  //     setInterval(() => {
  //       this.setState({
  //         today: moment().format("LTS"),
  //       });
  //     }, 1000);
  //   }

  render() {
    const startOf = moment().startOf("year").fromNow();
    const endOf = moment().endOf("year").fromNow();
    const startDat = moment().startOf("day").fromNow();
    const endOf1 = moment().endOf("day").fromNow();
    const startOf1 = moment().startOf("year").fromNow();
    const subTract = moment().subtract(7, "minute").calendar();
    return (
      <>
        <div>{moment().format("LTS")}</div>
        <div>{`День начался ${startDat}`}</div>
        <div>{`Год начался ${startOf}`}</div>
        <div>{`Конец года через ${endOf}`}</div>
        <div>{`Кінець дня через ${endOf1}`}</div>
        <div>{`це було ${startOf1}`}</div>
        <div>{`Це було днів тому ${subTract}`}</div>
        <div>{day}</div>
      </>
    );
  }
}

export default App;
