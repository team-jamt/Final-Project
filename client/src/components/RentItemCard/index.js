import React from "react";

function RentItemCard(props) {
  return (
    <div className="each-card">
      <div className="card">
        <div class="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>
          <div className="line-2">
            <span className="card-title line-2">Price:</span>
            <span className="card-text">{props.price}</span>
          </div>
          <a
            href="/home"
            className="btn"
            onClick={() => props.rentButton(props.id)}
          >
            Rent Item
        </a>
        </div>
      </div>
    </div>
  );
}

export default RentItemCard;
