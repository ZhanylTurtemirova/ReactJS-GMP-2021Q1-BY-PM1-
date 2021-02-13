import React from "react";

const createComponent = () => {
  let el = React.createElement(
    "div",
    { style: { color: "blue" } },
    `Create component using 'React.createElement'`
  );
  return el;
};
export default createComponent;
