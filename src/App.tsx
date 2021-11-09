import Footer from "components/utilities/Footer";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/utilities/Header";
import Home from "./pages/Home/Home";
import "./styles/globals.css";
import "./styles/scss/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
