import React from "react";
import logo from "./logo.svg";
import classes from "./App.module.scss";
console.log(classes);

function App() {
  return (
    <div className={classes.App}>
      <header className={classes["App-header"]}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes["App-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
