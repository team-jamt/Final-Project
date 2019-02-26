import React from "react";

function RentItemCard(props) {
  return (
    <div className="card">
      <div class="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.description}</p>
        <p className="card-text">{props.owner}</p>
        <a href="https://www.apple.com" className="btn">
          More Info
        </a>
        <a
          href="/home"
          className="btn"
          onClick={() => props.rentButton(props.id)}
        >
          Rent Item
        </a>
      </div>
    </div>
  );
}

export default RentItemCard;
