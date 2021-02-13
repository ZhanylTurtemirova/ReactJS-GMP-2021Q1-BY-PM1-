import React from "react";
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent";
import PureComponentExample from "./components/PureComponentExample";
import CreateComponent from "./components/CreateComponent";

function App() {
  return (
    <div className="App">
      <CreateComponent />
      <ClassComponent />
      <PureComponentExample />
      <FunctionalComponent />
    </div>
  );
}

export default App;
