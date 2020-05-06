import React from "react";

function Spinner(props) {
  const { size } = props;

  const styles = {
    width: size,
    height: size,
  };
  console.log(props);
  return <span style={styles} className="spinner"></span>;
}

export default Spinner;
