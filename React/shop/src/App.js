import React from "react";
import "./App.css";
import Menu from "./componets/Menu/Menu";
import Home from "./componets/Home/Home";
import Footer from "./componets/Footer/Footer";
import About from "./componets/About/About";
import Catalog from "./componets/Catalog/Catalog";
import Error404 from "./componets/Error404/Error404";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Menu></Menu>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/catalog" component={Catalog} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
