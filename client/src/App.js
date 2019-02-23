import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from 'react-router';

import NavTabs from "./components/NavTabs";

import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Post from "./pages/Post";
import Request from "./pages/Request";
import Login from "./components/Login";
import Auth from "./components/Auth/Auth";
import API from "./utils/API";
import { Navbar } from "react-bootstrap";


class App extends Component {
  state = {
    isLoggedIn: false,
    user: {
      email: "",
      name: ""
    }
  };

  handleLogin = user => {
    this.setState({
      isLoggedIn: true,
      user
    });
    localStorage.setItem("username", user.username);
  };

  handleSignup = userData => {
    console.log("uD", userData);
    this.setState({
      isLoggedIn: true,
      user: userData
    });
  };

  handleLogOut = () => {
    API.logout()
      .then(res => {
        this.setState({
          isLoggedIn: false,
          user: {
            id: "",
            name: ""
          }
        });
        localStorage.removeItem("username");
      })
      .catch(err => {
        console.log(err);
      });
  };


  componentDidMount() {
    if (localStorage.getItem("username")) {
      API.checkLogin(localStorage.getItem("username")).then(res => {
        if (res.data.status === "loggedIn") {
          this.setState({
            isLoggedIn: true,
            user: res.data.user
          });
        }
      });
    }
  }


  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login}>
            render={() => (this.state.password ?
              <Redirect to="/" /> :
              <Login />
            )};
          </Route>
          <NavTabs />

          <Route exact path="/" component={Home} />
          <Route exact path="/rent" component={Rent} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/post" component={Post} />
          <Route exact path="/request" component={Request} />
          <Route
            exact
            path="/login"
            render={props => (
              <Auth
                {...props}
                handleLogIn={this.handleLogin}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Auth
                {...props}
                handleSignUp={this.handleSignup}
                isLoggedIn={this.state.isLoggedIn}
              />
            )}
          />
        </Switch>
      </Router>

    );
  }
}



export default App;
