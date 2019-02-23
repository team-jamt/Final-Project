import React from "react";

function RequestCard(props) {
    return (
        <div className="request-card">
            <div class="row">
                <div className="col-sm-5">
                    <h5 className="request-title">{props.name}</h5>
                    <p className="request-description">{props.description}</p>
                </div>

                <div className="col-sm-4">
                    <p className="middle-col">
                        <span class="middle-col-item">Category:</span>
                        <span>{props.category}</span>
                    </p>

                    <p className="middle-col">
                        <span class="middle-col-item">Will Pay:</span>
                        <span>{props.price}</span>
                    </p>


                </div>

                <div className="col-sm-3">

                    <button className="request-btn"> <a href="https://www.google.com" className="request-link">Respond to Request</a></button>
                </div>
            </div>
        </div >
    )
}

export default RequestCard;