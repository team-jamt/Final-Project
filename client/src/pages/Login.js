import React, { Component } from "react";
import "../styles/Login.css";
import fire from "../config/Fire";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        localStorage.setItem("username", u.user.email);
        // console.log("hello sir", u.user.email);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="row head">
          <div className="col-sm-6">
            <h1 className="appName">Rentilly</h1>
          </div>

          <div className="col-sm-6 login-inputs">
            <form>
              <div className="form-row">
                <div className="form-group col-md-4 login">
                  <label for="inputEmail4">Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                    id="inputEmail4"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group col-md-4 login">
                  <label for="inputPassword4">Password</label>
                  <input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    className="form-control"
                    name="password"
                    id="inputPassword4"
                    placeholder="Password"
                  />
                </div>

                <div className="col-sm-4">
                  <button
                    type="submit"
                    onClick={this.login}
                    className="btn login-btn"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="row login-body">
          <div className="col-sm-6">
            <div className="welcome-head">
              <h3>Welcome Neighbor!</h3>
            </div>
            <p className="welcome-msg">
              Rentilly is your neighborhood marketplace where you can{" "}
              <span className="bold">rent</span>,{" "}
              <span className="bold">buy</span>,{" "}
              <span className="bold">sell</span>, and{" "}
              <span className="bold">request</span> items.
            </p>
          </div>
          <div className="col-sm-6">
            <h3 className="new">New to Rentilly?</h3>
            <div className="right-side col-sm-12">
              <button type="submit" className="btn gotosignup">
                <Link to="/signup" className="signuplink">
                  Sign Up Here
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          <img
            src="http://www.nutantravels.com/img/footer/footer.png"
            className="footer-img"
          />
        </div>
      </div>
    );
  }
}

export default Login;
