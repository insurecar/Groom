import React from "react";

export default function Main({ toggle }) {
  return (
    <>
      <h1>Привіт на прикладі з Context</h1>
      <button onClick={toggle} className="btn btn-success">
        Показати alert
      </button>
    </>
  );
}
