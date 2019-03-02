import React from "react";

function ItemCard(props) {
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
            <span className="card-title">Price:</span>
            <span className="card-text">{props.price}</span>
          </div>

          <a
            href="/home"
            className="btn"
            onClick={() => props.buyButton(props.id)}
          >
            Purchase Item
        </a>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
