import React from "react";

function Spinner({ size }) {
  const styles = {
    width: size,
    height: size,
  };
  return <span style={styles} className="spinner"></span>;
}

export default Spinner;
