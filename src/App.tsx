import ServiceDetails from "pages/ServiceDetails/ServiceDetails";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./styles/globals.css";
import "./styles/scss/main.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/services/:id">
          <ServiceDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
