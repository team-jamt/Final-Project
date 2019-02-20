import React from "react";

function Item(props) {
    return (
        <div className="card">
            <img alt={props.name} src={props.image} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href="https://www.apple.com">More Info</a>
            </div>
        </div>
    )
}

export default Item;