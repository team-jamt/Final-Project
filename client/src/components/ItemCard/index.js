import React from "react";

function ItemCard(props) {
    return (
        <div className="card">
            <div class="img-container">
                <img alt={props.name} src={props.image} />
            </div>


            <div className="card-body">

                <h5 className="card-title">{props.name}</h5>
                <h5 className="card-title">{props.price}</h5>


                <p className="card-text">{props.description}</p>
                <a href="https://www.apple.com" className="btn">Message Owner</a>

            </div>
        </div>
    )
}

export default ItemCard;