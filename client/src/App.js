import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./pages/NavTabs";
import Home from "./pages/Home";
import Rent from "./pages/Rent";
import Buy from "./pages/Buy";
import Post from "./pages/Post";
import Request from "./pages/Request";
import Login from "./components/Login";


class App extends Component {
  state = {
    isLoggedIn: false,
    user: {
      id: "",
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

  handleSignup = user => {
    this.setState({
      isLoggedIn: true,
      user
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
        <div className="App">
          <div className="site">
            <div className="site-content">
              <NavBar
                isLoggedIn={this.state.isLoggedIn}
                handleLogOut={this.handleLogOut}
              />
              <div className="hero-body">
                <div className="container has-text-centered">
                  <div className="box column is-three-fifths is-offset-one-fifth">
                    <Switch>
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
                      <Route exact path="/bulletin" component={TripCard} />
                      <Route component={ErrorPage} />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route path="/login" exact component={Login} />
//         <NavTabs />
//         <Route exact path="/" component={Home} />
//         <Route exact path="/rent" component={Rent} />
//         <Route exact path="/buy" component={Buy} />
//         <Route exact path="/post" component={Post} />
//         <Route exact path="/request" component={Request} />
//       </div>
//     </Router>
//   );
// }
// export default App;
