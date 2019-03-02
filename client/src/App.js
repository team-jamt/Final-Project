import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Post from "./pages/Post";
import Request from "./pages/Request";
import Login from "./pages/Login";
import fire from "./config/Fire";
import SignUp from "./pages/SignUp";
import MyRentals from "./pages/MyRentals";
import MySales from "./pages/MySales";
import MyRequests from "./pages/MyRequests";
import Messages from "./pages/Messages";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (

      <Router>
        <div>

          {this.state.user ? (<Redirect to="/home" />) : (<Redirect to="/Login" />)}

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/rent" component={Rent} />
            <Route path="/buy" component={Buy} />
            <Route path="/post" component={Post} />
            <Route path="/request" component={Request} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/myrentals" component={MyRentals} />
            <Route path="/mysales" component={MySales} />
            <Route path="/myrequests" component={MyRequests} />
            <Route path="/messages" component={Messages} />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;

