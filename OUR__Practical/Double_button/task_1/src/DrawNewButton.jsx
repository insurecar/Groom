import React from "react";

function DrawNewButton({ style, onChange, name }) {
  return (
    <button style={style} onClick={onChange}>
      {name}
    </button>
  );
}

export default DrawNewButton;
