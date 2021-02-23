import React, { Component } from "react";
class MyComponent extends Component {
  render() {
    return (
      <div>
        {process.env.NODE_ENV !== "prod"
          ? "Development mode"
          : "Production mode"}
      </div>
    );
  }
}
export default MyComponent;
