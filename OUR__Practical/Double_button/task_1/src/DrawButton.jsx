import React from "react";

function DrawButton({ style, onChange, name }) {
  return (
    <button style={style} onClick={onChange}>
      {name}
    </button>
  );
}

export default DrawButton;
