import React from "react";

const withClass = (Component, className) => {
  return (props) => {
    // console.log(props);

    return (
      <div className={className}>
        <Component {...props} />
      </div> //High order Component, вони обертають другі компоненти і добаляють їм певний функціонал
    );
  };
};

export default withClass;
