import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <Clock offset={0} materik={"Europe"} location={"Prague"} />
      <Clock offset={2} materik={"Europe"} location={"Kiev"} />
      <Clock offset={-5} materik={"America"} location="New_York" />
    </>
  );
};
export default App;
