import React from "react";
import { generateNumbersRange } from "../utilities/utilities";

export const getOptionsBegin = () => {
  return generateNumbersRange(0, 23).map((num) => {
    const hours = `0${num}`.slice(-2);
    let increase = 0;
    let minutes = `0${increase}`;
    let optionBegin = [];

    for (let i = 0; i < 4; i++) {
      optionBegin.push(
        <option
          key={num + i}
          value={`${hours}:${minutes.slice(-2)}`}
        >{`${hours.slice(-2)}:${minutes.slice(-2)}`}</option>
      );
      increase += 15;
      minutes = `0${increase}`;
    }
    return optionBegin;
  });
};
