import React, { Component } from "react";
import ReactDOM from "react-dom";

class ClassComponent extends Component {
  render() {
    return <div>Class Component</div>;
  }
}

function FunctionalComponent() {
  return <div>Functional Component</div>;
}

const createComponent = () => {
  let el = React.createElement(
    "div",
    { style: { color: "blue" } },
    `Create component using 'React.createElement'`
  );

  ReactDOM.render(el, document.querySelector("#example"));
};
class PureComponentExample extends React.PureComponent {
  render() {
    return <div>Pure Component</div>;
  }
}
const HelloMessage = () => {
  return <div>Hello React!</div>;
};
function App() {
  return (
    <div className="App">
      {createComponent()}
      <ClassComponent />
      <PureComponentExample />
      <FunctionalComponent />
      <HelloMessage />
    </div>
  );
}

export default App;
