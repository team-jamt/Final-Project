import React, { Component, Fragment } from "react";
import "../styles/Home.css";
import fire from "../config/Fire";
import NavTabs from "../components/NavTabs";


class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <NavTabs />
        <div className="home-div">
          <h1>Home</h1>
          <h4>Rent, buy, and sell items to others in your neighborhood.</h4>
          <button onClick={this.logout}>Log Out</button>
          <div className="home-buttons">
            <button type="button" className="home-button" id="button1">
              My Items for Rent
              </button>
            <button type="button" className="home-button" id="button2">
              My Items for Sale
              </button>
            <button type="button" className="home-button" id="button3">
              Messages
              </button>
            <button type="button" className="home-button" id="button4">
              My Requests
              </button>
          </div>
        </div>
      </div>

    )
  }

}


export default Home;

