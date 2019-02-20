import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-div">
      <h1>Home</h1>
      <h4>Rent, buy, and sell items to others in your neighborhood.</h4>
      <div className="home-buttons">
        <button type="button" class="home-button" id="button1">
          My Items for Rent
        </button>
        <button type="button" class="home-button" id="button2">
          My Items for Sale
        </button>
        <button type="button" class="home-button" id="button3">
          Messages
        </button>
        <button type="button" class="home-button" id="button4">
          My Requests
        </button>
      </div>
    </div>
  );
}

export default Home;

