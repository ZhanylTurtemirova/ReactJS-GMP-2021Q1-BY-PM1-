import React from "react";
import "./App.css";

import HomePage from "./pages/HomePage/HomePage";
import MoviePage from "./pages/MoviePage/MoviePage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/movies/:id" component={MoviePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
