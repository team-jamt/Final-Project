import React, { Component, Fragment } from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import NavTabs from "../components/NavTabs";


class Home extends Component {

  render() {
    return (
      <div>
        <NavTabs />
        <div className="home-div">
          <div className="row">
            <div className="col-sm-6">
              <h1>Home</h1>
            </div>
          </div>
          <h4>Rent, buy, and sell items to others in your neighborhood.</h4>

          <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="home-buttons">
              <Link to="/myrentals" className="homelink">
                <button type="button" className="home-button" id="button1">
                  My Items for Rent
              </button>
              </Link>
              <Link to="/mysales" className="homelink">
                <button type="button" className="home-button" id="button2">
                  My Items for Sale
              </button>
              </Link>
              <Link to="/myrequests" className="homelink">
                <button type="button" className="home-button" id="button3">
                  My Requests
              </button>
              </Link>
              <Link to="/messages" className="homelink">
                <button type="button" className="home-button" id="button4">
                  Messages
              </button>
              </Link>
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

