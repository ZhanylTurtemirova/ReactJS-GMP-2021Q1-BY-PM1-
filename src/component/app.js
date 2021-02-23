import React, { Component } from "react";
class MyComponent extends Component {
  render() {
    return (
      <div>
        {process.env.NODE_ENV !== "production"
          ? "Development mode"
          : "Production mode"}
      </div>
    );
  }
}
export default MyComponent;
