import React from "react";

function RequestCard(props) {
    return (
        <div className="request-card">
            <div class="row">
                <div className="col-sm-6">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                </div>

                <div className="col-sm-3">
                    <h6>{props.type}</h6>
                    <h6>{props.category}</h6>
                    <h6>{props.price}</h6>
                </div>

                <div className="col-sm-3">
                    <div class="img-container">
                        <img alt={props.name} src={props.image} />
                    </div>
                    <a href="https://www.google.com" classname="btn">Respond to Request</a>
                </div>
            </div>
        </div>
    )
}

export default RequestCard;