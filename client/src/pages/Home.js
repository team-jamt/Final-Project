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
          <div className="row">
            <div className="col-sm-6">
              <h1>Home</h1>
            </div>
            <div className="col-sm-6">
              <button onClick={this.logout} className=" logout-btn">Log Out</button>
            </div>
          </div>
          <h4>Rent, buy, and sell items to others in your neighborhood.</h4>

          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="home-buttons">
              <button type="button" className="home-button" id="button1">
                My Items for Rent
              </button>
              <button type="button" className="home-button" id="button2">
                My Items for Sale
              </button>
              <button type="button" className="home-button" id="button3">
                My Messages
              </button>
              <button type="button" className="home-button" id="button4">
                My Requests
              </button>
            </div>
          </div>
        </div>

        <div className="footer">
          <img src="http://www.nutantravels.com/img/footer/footer.png" className="footer-img"></img>
        </div>
      </div>

    )
  }

}


export default Home;

