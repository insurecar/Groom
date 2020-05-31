import React from "react";
import { generateNumbersRange } from "../utilities/utilities";

export const getOptionsEnd = () => {
  return [...Array(24).keys()].map((num) => {
    const hours = `0${num}`.slice(-2);
    let increase = 0;
    let minutes = `0${increase}`;
    // let optionEnd = [];

    let optionEnd = [...Array(4).keys()].map((elem, index) => {
      return (
        <option
          key={num + index}
          value={`${hours}:${minutes.slice(-2)}`}
        >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
      );
      increase += 15;
      minutes = `0${increase}`;
    });

    // for (let i = 0; i < 4; i++) {
    //   optionEnd.push(
    //     <option
    //       key={num + i}
    //       value={`${hours}:${minutes.slice(-2)}`}
    //     >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
    //   );
    //   increase += 15;
    //   minutes = `0${increase}`;
    //     if (hours === "24") i = 4;
    // }
    return optionEnd;
  });
};
