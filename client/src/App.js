import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";

import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Post from "./pages/Post";
import Request from "./pages/Request";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/rent" component={Rent} />
        <Route exact path="/buy" component={Buy} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/request" component={Request} />
      </div>
    </Router>
  );
}
export default App;
