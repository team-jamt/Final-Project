import React from "react";
import { Link } from "react-router-dom";

function MyRequestsCard(props) {
    return (
        <div className="request-card">
            <div className="row">
                <div className="col-sm-5">
                    <h5 className="request-title">{props.name}</h5>
                    <p className="request-description">{props.description}</p>
                </div>

                <div className="col-sm-4">
                    <p className="middle-col">
                        <span className="middle-col-item">Category:</span>
                        <span>{props.category}</span>
                    </p>

                    <p className="middle-col">
                        <span className="middle-col-item">Will Pay:</span>
                        <span>{props.price}</span>
                    </p>


                </div>

                <div className="col-sm-3">


                    <a
                        href="/myrequests"
                        className="btn delete-request"
                        onClick={() => props.deleteButton(props.id)}
                    >
                        Delete Request
                    </a>


                </div>
            </div>
        </div >
    )
}

export default MyRequestsCard;