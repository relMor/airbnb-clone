import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
